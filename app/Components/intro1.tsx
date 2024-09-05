import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../assets/introimg1.png'),
    title: 'Get Ready to Learn',
    subtitle: 'In this app, you will get all sign language tutorials which will help you to learn.',
  },
  {
    id: '2',
    image: require('../assets/introimg2.png'),
    title: 'Watch videos and Practice',
    subtitle: 'In this app, you will get all videos regarding the sign language and practice on daily basis.',
  },
  {
    id: '3',
    image: require('../assets/introimg3.png'),
    title: 'Start Your Journey',
    subtitle: 'Begin your journey to learn sign language and communicate effectively.',
  },
];

const Slide = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const Pagination = ({ scrollX }) => {
  return (
    <View style={styles.pagination}>
      {slides.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

const OnboardingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('Last item.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <Slide item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Pagination scrollX={scrollX} />
      
      {currentIndex < slides.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={() => console.log('Skip pressed')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={scrollTo}>
        <Animated.Text style={styles.buttonText}>→</Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    width,
  },
  image: {
    flex: 0.5,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  pagination: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 8,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 20,
    bottom: 20,
    right: 20,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFA500',
    fontWeight: 'bold',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  skipText: {
    fontSize: 16,
    color: 'white',
  },
});

export default OnboardingSlider;