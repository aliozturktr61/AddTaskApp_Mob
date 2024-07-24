import {View, Text, StyleSheet, Dimensions, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import colors from '../themes/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomTextInput from '../components/CustomTextInput';
import SearchIcon from '../assets/images/SearchIcon.png';
import TodoItem from '../components/TodoItem';
import CustomButton from '../components/CustomButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import renderEmptyList from '../components/EmptyList';
import Toast from 'react-native-toast-message';



export default function TaskListScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);


  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, []),
  );

  useEffect(() => {
    filterTasks();
  }, [searchText, tasks]);

  const loadTasks = async () => {
    try {
      //* AsyncStorage da taskları al
      const existingTasks = await AsyncStorage.getItem('tasks');
      //* Tasks varsa bunu jsona çevir yoksa da boş dizi ver.
      const tasks = existingTasks ? JSON.parse(existingTasks) : [];
      //* Statei güncelle
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const filterTasks = () => {
    if (searchText) {
      //* taskların title ile searchText eşleşirse dizi olarak ver
      const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(searchText.toLowerCase()),
      );
      //* filtrelenmiş diziyi state aktar
      setFilteredTasks(filtered);
    } else {
      //* searchText boş ise taskların hepsini ekrana bastır
      setFilteredTasks(tasks);
    }
  };

  const handleDeleteTask = async id => {
    try {
      //* Bastığımız elemanın idsine göre task stateini filtrele ve değişkene aktar.
      const updatedTasks = tasks.filter(task => task.id !== id);
      //* Taskt stateini güncelle.
      setTasks(updatedTasks);
      //* AsyncStorage güncelle
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      Toast.show({
        type: 'error',
        text1: 'Task silindi!',
        topOffset: 60,
      });
    } catch (error) {
      console.log(error, 'Failed to delete task');
    }
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Tasks</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 20}]}>
          <CustomTextInput
            value={searchText}
            onChangeText={setSearchText}
            imageSource={SearchIcon}
            style={{marginHorizontal: 0}}
            placeholder="Task Ara"
          />
          <FlatList
            keyExtractor={item => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={renderHeader}
            ListEmptyComponent={renderEmptyList}
            data={filteredTasks}
            renderItem={({item}) => (
              <TodoItem
                data={item}
                onDelete={() => handleDeleteTask(item.id)}
              />
            )}
          />
        </SafeAreaView>
        <CustomButton
          onPress={() => navigation.navigate(ScreenName.addTask)}
          label={'Add Task'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  mainContentContainer: {//KAPSAYICIYI SINRLANDIRDIK
    //backgroundColor: 'red', 
    height: '100%',
    position: 'absolute',
    padding: 20,
    width: Dimensions.get('screen').width,
  },
  headerContainer: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
});
