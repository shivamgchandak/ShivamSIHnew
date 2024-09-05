import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

interface Chapter {
  id: number;
  title: string;
  duration: string;
  videoAsset: any;
  active?: boolean;
}

interface LessonData {
  title: string;
  chapters: Chapter[];
}

// Import video assets
const goodEveningVideo = require('../assets/video/good_evening.mp4');

const lessonData: LessonData = {
  title: "Greetings",
  chapters: [
    { id: 1, title: "Good evening", duration: "1:00 min", videoAsset: goodEveningVideo },
  ]
};

const GreetingsLesson: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Chapters' | 'Reviews'>('Chapters');
  const [activeChapter, setActiveChapter] = useState<Chapter>(
    lessonData.chapters.find(chapter => chapter.active) || lessonData.chapters[0]
  );

  const renderChapterItem = ({ item }: { item: Chapter }) => (
    <TouchableOpacity 
      style={styles.chapterItem}
      onPress={() => setActiveChapter(item)}
    >
      <Text style={styles.chapterNumber}>{item.id}.</Text>
      <Text style={[styles.chapterTitle, item.id === activeChapter.id && styles.activeChapterTitle]}>
        {item.title}
      </Text>
      {item.id === activeChapter.id ? (
        <View style={styles.playButton}>
          <Text style={styles.playButtonText}>▶</Text>
        </View>
      ) : (
        <Text style={styles.chapterDuration}>{item.duration}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{lessonData.title}</Text>
        <TouchableOpacity>
          <Text style={styles.searchButton}>🔍</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.videoContainer}>
        <Video
          source={activeChapter.videoAsset}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{activeChapter.title}</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Chapters' && styles.activeTab]}
          onPress={() => setActiveTab('Chapters')}
        >
          <Text style={[styles.tabText, activeTab === 'Chapters' && styles.activeTabText]}>Chapters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Reviews' && styles.activeTab]}
          onPress={() => setActiveTab('Reviews')}
        >
          <Text style={[styles.tabText, activeTab === 'Reviews' && styles.activeTabText]}>Reviews</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lessonData.chapters}
        renderItem={renderChapterItem}
        keyExtractor={item => item.id.toString()}
        style={styles.chapterList}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    fontSize: 20,
  },
  videoContainer: {
    height: 200,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  chapterList: {
    flex: 1,
  },
  chapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  chapterNumber: {
    marginRight: 8,
    fontSize: 16,
    color: '#666',
  },
  chapterTitle: {
    flex: 1,
    fontSize: 16,
  },
  activeChapterTitle: {
    color: '#FFA500',
  },
  chapterDuration: {
    fontSize: 14,
    color: '#666',
  },
  playButton: {
    backgroundColor: '#FFA500',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default GreetingsLesson;