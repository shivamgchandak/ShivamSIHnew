import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

interface VideoAssets {
  [key: string]: any;
}

export const numberVideos: VideoAssets = {
  '0': require('../assets/dataset/0.mp4'),
  '1': require('../assets/dataset/1.mp4'),
  '2': require('../assets/dataset/2.mp4'),
  '3': require('../assets/dataset/3.mp4'),
  '4': require('../assets/dataset/4.mp4'),
  '5': require('../assets/dataset/5.mp4'),
  '6': require('../assets/dataset/6.mp4'),
  '7': require('../assets/dataset/7.mp4'),
  '8': require('../assets/dataset/8.mp4'),
  '9': require('../assets/dataset/9.mp4'),
};

export const alphabetVideos: VideoAssets = {
  'A': require('../assets/dataset/A.mp4'),
  'B': require('../assets/dataset/B.mp4'),
  'C': require('../assets/dataset/C.mp4'),
  'D': require('../assets/dataset/D.mp4'),
  'E': require('../assets/dataset/E.mp4'),
  'F': require('../assets/dataset/F.mp4'),
  'G': require('../assets/dataset/G.mp4'),
  'H': require('../assets/dataset/H.mp4'),
  'I': require('../assets/dataset/I.mp4'),
  'J': require('../assets/dataset/J.mp4'),
  'K': require('../assets/dataset/K.mp4'),
  'L': require('../assets/dataset/L.mp4'),
  'M': require('../assets/dataset/M.mp4'),
  'N': require('../assets/dataset/N.mp4'),
  'O': require('../assets/dataset/O.mp4'),
  'P': require('../assets/dataset/P.mp4'),
  'Q': require('../assets/dataset/Q.mp4'),
  'R': require('../assets/dataset/R.mp4'),
  'S': require('../assets/dataset/S.mp4'),
  'T': require('../assets/dataset/T.mp4'),
  'U': require('../assets/dataset/U.mp4'),
  'V': require('../assets/dataset/V.mp4'),
  'W': require('../assets/dataset/W.mp4'),
  'X': require('../assets/dataset/X.mp4'),
  'Y': require('../assets/dataset/Y.mp4'),
  'Z': require('../assets/dataset/Z.mp4'),
};

export const wordVideos: VideoAssets = {
  'after': require('../assets/dataset/After.mp4'),
  'again': require('../assets/dataset/Again.mp4'),
  'against': require('../assets/dataset/Against.mp4'),
  'age': require('../assets/dataset/Age.mp4'),
  'all': require('../assets/dataset/All.mp4'),
  'alone': require('../assets/dataset/Alone.mp4'),
  'also': require('../assets/dataset/Also.mp4'),
  'and': require('../assets/dataset/And.mp4'),
  'ask': require('../assets/dataset/Ask.mp4'),
  'at': require('../assets/dataset/At.mp4'),
  'be': require('../assets/dataset/Be.mp4'),
  'beautiful': require('../assets/dataset/Beautiful.mp4'),
  'before': require('../assets/dataset/Before.mp4'),
  'best': require('../assets/dataset/Best.mp4'),
  'better': require('../assets/dataset/Better.mp4'),
  'busy': require('../assets/dataset/Busy.mp4'),
  'but': require('../assets/dataset/But.mp4'),
  'bye': require('../assets/dataset/Bye.mp4'),
  'can': require('../assets/dataset/Can.mp4'),
  'cannot': require('../assets/dataset/Cannot.mp4'),
  'change': require('../assets/dataset/Change.mp4'),
  'college': require('../assets/dataset/College.mp4'),
  'come': require('../assets/dataset/Come.mp4'),
  'computer': require('../assets/dataset/Computer.mp4'),
  'day': require('../assets/dataset/Day.mp4'),
  'distance': require('../assets/dataset/Distance.mp4'),
  'do not': require('../assets/dataset/Do Not.mp4'),
  'do': require('../assets/dataset/Do.mp4'),
  'does not': require('../assets/dataset/Does Not.mp4'),
  'eat': require('../assets/dataset/Eat.mp4'),
  'engineer': require('../assets/dataset/Engineer.mp4'),
  'fight': require('../assets/dataset/Fight.mp4'),
  'finish': require('../assets/dataset/Finish.mp4'),
  'from': require('../assets/dataset/From.mp4'),
  'glitter': require('../assets/dataset/Glitter.mp4'),
  'go': require('../assets/dataset/Go.mp4'),
  'god': require('../assets/dataset/God.mp4'),
  'gold': require('../assets/dataset/Gold.mp4'),
  'good': require('../assets/dataset/Good.mp4'),
  'great': require('../assets/dataset/Great.mp4'),
  'hand': require('../assets/dataset/Hand.mp4'),
  'hands': require('../assets/dataset/Hands.mp4'),
  'happy': require('../assets/dataset/Happy.mp4'),
  'hello': require('../assets/dataset/Hello.mp4'),
  'help': require('../assets/dataset/Help.mp4'),
  'her': require('../assets/dataset/Her.mp4'),
  'here': require('../assets/dataset/Here.mp4'),
  'his': require('../assets/dataset/His.mp4'),
  'home': require('../assets/dataset/Home.mp4'),
  'homepage': require('../assets/dataset/Homepage.mp4'),
  'how': require('../assets/dataset/How.mp4'),
  'invent': require('../assets/dataset/Invent.mp4'),
  'it': require('../assets/dataset/It.mp4'),
  'keep': require('../assets/dataset/Keep.mp4'),
  'language': require('../assets/dataset/Language.mp4'),
  'laugh': require('../assets/dataset/Laugh.mp4'),
  'learn': require('../assets/dataset/Learn.mp4'),
  'me': require('../assets/dataset/ME.mp4'),
  'more': require('../assets/dataset/More.mp4'),
  'my': require('../assets/dataset/My.mp4'),
  'name': require('../assets/dataset/Name.mp4'),
  'next': require('../assets/dataset/Next.mp4'),
  'not': require('../assets/dataset/Not.mp4'),
  'now': require('../assets/dataset/Now.mp4'),
  'of': require('../assets/dataset/Of.mp4'),
  'on': require('../assets/dataset/On.mp4'),
  'our': require('../assets/dataset/Our.mp4'),
  'out': require('../assets/dataset/Out.mp4'),
  'pretty': require('../assets/dataset/Pretty.mp4'),
  'right': require('../assets/dataset/Right.mp4'),
  'sad': require('../assets/dataset/Sad.mp4'),
  'safe': require('../assets/dataset/Safe.mp4'),
  'see': require('../assets/dataset/See.mp4'),
  'self': require('../assets/dataset/Self.mp4'),
  'sign': require('../assets/dataset/Sign.mp4'),
  'sing': require('../assets/dataset/Sing.mp4'),
  'so': require('../assets/dataset/So.mp4'),
  'sound': require('../assets/dataset/Sound.mp4'),
  'stay': require('../assets/dataset/Stay.mp4'),
  'study': require('../assets/dataset/Study.mp4'),
  'talk': require('../assets/dataset/Talk.mp4'),
  'television': require('../assets/dataset/Television.mp4'),
  'thank You': require('../assets/dataset/Thank You.mp4'),
  'thank': require('../assets/dataset/Thank.mp4'),
  'that': require('../assets/dataset/That.mp4'),
  'they': require('../assets/dataset/They.mp4'),
  'this': require('../assets/dataset/This.mp4'),
  'those': require('../assets/dataset/Those.mp4'),
  'time': require('../assets/dataset/Time.mp4'),
  'to': require('../assets/dataset/To.mp4'),
  'type': require('../assets/dataset/Type.mp4'),
  'us': require('../assets/dataset/Us.mp4'),
  'walk': require('../assets/dataset/Walk.mp4'),
  'wash': require('../assets/dataset/Wash.mp4'),
  'way': require('../assets/dataset/Way.mp4'),
  'we': require('../assets/dataset/We.mp4'),
  'welcome': require('../assets/dataset/Welcome.mp4'),
  'what': require('../assets/dataset/What.mp4'),
  'when': require('../assets/dataset/When.mp4'),
  'where': require('../assets/dataset/Where.mp4'),
  'which': require('../assets/dataset/Which.mp4'),
  'with': require('../assets/dataset/With.mp4'),
  'without': require('../assets/dataset/Without.mp4'),
  'world': require('../assets/dataset/World.mp4'),
  'wrong': require('../assets/dataset/Wrong.mp4'),
  'you': require('../assets/dataset/You.mp4'),
  'your': require('../assets/dataset/Your.mp4'),
  'yourself':require('../assets/dataset/Yourself.mp4'),
};

const TextToISL: React.FC = () => {
  const [text, setText] = useState('');
  const [currentVideo, setCurrentVideo] = useState<any>(null);
  const [videoQueue, setVideoQueue] = useState<{ video: any; text: string }[]>([]);
  const [currentText, setCurrentText] = useState<string>('');
  const videoRef = useRef<Video>(null);

  const getAvailableWords = (text: string): string[] => {
    const words = text.toLowerCase().split(' ');
    return words.filter(word => word in wordVideos);
  };

  const createVideoQueue = (text: string) => {
    const words = text.toLowerCase().split(' ');
    const availableWords = getAvailableWords(text);
    console.log(availableWords)
    let queue: { video: any; text: string }[] = [];

    words.forEach(word => {
      if (availableWords.includes(word)) {
        queue.push({ video: wordVideos[word], text: word });
      } else {
        word.split('').forEach(letter => {
          if (letter.toUpperCase() in alphabetVideos) {
            queue.push({ video: alphabetVideos[letter.toUpperCase()], text: letter.toUpperCase() });
          }
        });
      }
    });

    return queue;
  };

  useEffect(() => {
    if (videoQueue.length > 0 && !currentVideo) {
      const nextVideo = videoQueue[0];
      setCurrentVideo(nextVideo.video);
      setCurrentText(nextVideo.text);
      setVideoQueue(videoQueue.slice(1));
    }
  }, [videoQueue, currentVideo]);

  useEffect(() => {
    if (currentVideo && videoRef.current) {
      playVideo();
    }
  }, [currentVideo]);

  const playVideo = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.unloadAsync();
        await videoRef.current.loadAsync(currentVideo, {}, false);
        await videoRef.current.playAsync();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleTranslate = () => {
    const newQueue = createVideoQueue(text);
    setVideoQueue(newQueue);
    setCurrentVideo(null);
    setCurrentText('');
  };

  const handleVideoEnd = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.didJustFinish) {
      setCurrentVideo(null);
      setCurrentText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text to Sign</Text>
      <View style={styles.videoContainer}>
        {currentVideo && (
          <>
            <Video
              ref={videoRef}
              source={currentVideo}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              onPlaybackStatusUpdate={handleVideoEnd}
              onError={(error) => console.error("Video playback error:", error)}
            />
            <View style={styles.textOverlay}>
              <Text style={styles.currentText}>{currentText}</Text>
            </View>
          </>
        )}
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Write your text"
      />
      <Text style={styles.charCount}>{`character: ${text.length}/50`}</Text>
      <TouchableOpacity style={styles.translateButton} onPress={handleTranslate}>
        <Text style={styles.translateButtonText}>Translate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.micButton}>
        <Text style={styles.micButtonText}>🎤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  videoContainer: {
    aspectRatio: 16 / 9,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  currentText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  charCount: {
    textAlign: 'right',
    color: 'gray',
    marginBottom: 10,
  },
  translateButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  translateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  micButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default TextToISL;