//master branch test
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Touchable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  monthNamesShort: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  dayNames: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
  ],
  dayNamesShort: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  today: 'Bugün',
};
LocaleConfig.defaultLocale = 'tr';
export default function () {
  const [text, onChangeText] = React.useState('');
  const [time, onTime] = React.useState(0);
  const [clock, onClock] = React.useState(0);
  const [selected, setSelected] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      <Calendar
        firstDay={1}
        //pazartesiden başlatmak için first day 1 kullanıyoruz
        onDayPress={day => {
          console.log('selected day', day);
          setSelected(true);
          onTime(1);
        }}
        markedDates={{
          '2021-07-12': {selected: true},
          '2021-07-18': {
            selected: selected,
            marked: true,
            dotColor: 'red',
            activeOpacity: 1,
          },
          '2021-07-19': {disabled: true, disableTouchEvent: true},
        }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 350,
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#2879FF',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#FF633B',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: 'red',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#333333',
          indicatorColor: '#333333',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
      {time === 1 ? (
        <View>
          <Text style={{marginLeft: 10, fontWeight: '700', marginTop: 30}}>
            Saat Seç
          </Text>
          <View style={{height: 60}}>
            <ScrollView
              horizontal={true}
              style={{margin: 10}}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#E1E8F6',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text>08:00 </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#E1E8F6',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text style={{color: 'gray'}}>09:00</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#FF633C',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text style={{color: 'white'}}>10:00</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      ) : null}
      {clock === 1 ? (
        <View>
          <Text style={{marginLeft: 10, fontWeight: '700', marginTop: 30}}>
            Dakika Seç
          </Text>
          <View style={{height: 60}}>
            <ScrollView
              horizontal={true}
              style={{margin: 10}}
              showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#E1E8F6',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text>08:00 </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#E1E8F6',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text style={{collor: 'gray'}}>09:00</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 60,
                  backgroundColor: '#FF633C',
                  marginLeft: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => onClock(1)}>
                <Text style={{color: 'white'}}>10:00</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      ) : null}

      <TextInput
        style={{
          width: 370,
          alignSelf: 'center',
          borderWidth: 0.5,
          borderRadius: 20,
        }}
        onChangeText={onChangeText}
        value={text}
        placeholder="Randevu Notunuz"
        multiline
        numberOfLines={3}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <TouchableOpacity>
          <View
            style={{
              height: 60,
              width: 130,
              backgroundColor: '#E1E8F6',
              marginLeft: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>İptal{clock}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: 60,
              width: 130,
              backgroundColor: '#FF633C',
              marginLeft: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Oluştur</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
