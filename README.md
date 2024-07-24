# AsyncStorage-Task-App
- Bu projedede İş planlama uygulaması hazırlanmıştır.
- Görev planlaması oluşturulmuş,
- Görevlerin sürelerini planlama,
- ve Görevlerin takibi , gibi işlemler yapılabilmektedir.
- Proje içerisinde ;
  - useCallback, useEffect, useState hook ları,
  - StyleSheet, Dimensions, FlatList bileşenleri,
  kullanılmıştır.
- lottie kütüphanesi ile animasyon lar kullanılmıştır.
    Animasyonlar json formatında animasion klasörüne kaydedilerek 
      <LottieView
            autoPlay
            loop
            style={{height: 150, width: '100%'}}
            source={require('../assets/animations/pencil.json')}
          />
        kullanlıyor.
  - toast message kütüphanesi ile işlemler yapıldıktan sonra kullaıcıya bilgi verilmiştir.
# Kütüphaneler
@react-native-async-storage/async-storage
@react-navigation/native
react-native-screens react-native-safe-area-context
@react-navigation/native-stack
react-native-gesture-handler
react-native-modal-datetime-picker @react-native-community/datetimepicker
react-native-vector-icons
react-native-dropdown-picker
react-native-uuid
react-native-toast-message
lottie-react-native


vector icons icin kurulum içerisinde

1 - ios klasöründe
   Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode autocomplete is not working):

List of all available fonts to copy & paste in Info.plist
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>FontAwesome6_Brands.ttf</string>
  <string>FontAwesome6_Regular.ttf</string>
  <string>FontAwesome6_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array> ekleyin

2 - android klasöründe 
Edit android/app/build.gradle (NOT android/build.gradle) and add:

apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
ekleyin.
3 - Edit the android/settings.gradle file as shown below:

rootProject.name = 'MyApp'

include ':app'

include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
ekleyin
4- Edit the android/app/build.gradle (located in the app folder) as shown below:
implementation project(':react-native-vector-icons')


### useFocusEffect:

- Bu hook, React Navigation kütüphanesinden gelir ve bir ekrana odaklandığında belirli bir fonksiyonun ya da işlevin çalışmasını sağlar.

### useCallback:

- `useCallback(() => {
  loadTasks();
}, []),`

- Bu hook, fonksiyonun referansını hatırlatmaya yardımcı olur.`loadTasks` fonksiyonu bir kez oluşturulacak ve aynı referans her seferinde kullanılacaktır.

### useRoute:

- React Navigation kütüphanesinde kullanılan bir Hooktur ve mevcut ekrarnın navigasyon durumuna ve parametlerine erişim sağlar.Bu hook, özellikler ekranlar arasında veri taşımak ve mevcut ekranın bilgilerine erişmek için kullanılır.

### useLayoutEffect:

- Ekranda olacak güncellemeleri kullanıcıya göstermeden yapılmasını garanti etmek için kullanılır.
# AddTaskApp_Mob
