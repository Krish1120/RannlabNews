import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState([]);
  // fetching news using axios
  const fetchApi = async () => {
    const res = await axios.get(
      'https://www.livenewstoday.app/wp-json/wp/v2/posts',
    );
    setNews(res.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{display: 'flex', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            TODAY'S NEWS
          </Text>
        </View>
        <View style={{padding: 10}}>
          {news && news.length > 0 ? (
            <>
              {news.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(item.guid.rendered);
                    }}
                    style={{
                      padding: 10,
                      backgroundColor: 'white',
                      elevation: 5,
                      margin: 5,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      {item.title.rendered}
                    </Text>
                    <Text style={{marginVertical: 5, color: 'blue'}}>
                      CLICK HERE TO READ MORE
                    </Text>
                    <Text style={{alignSelf: 'flex-end'}}>{item.date}</Text>
                  </TouchableOpacity>
                );
              })}
            </>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
