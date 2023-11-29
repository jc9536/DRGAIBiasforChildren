import React, { useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Fonts from './fonts'
import theme from './theme'
import background from './images/BG.png'
import speech from './images/speech.png'
import {
  ChakraProvider, Container, Box, Button, Text, IconButton, HStack, Stack, Image, Modal, Flex, 
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  ModalCloseButton } from '@chakra-ui/react';
import { TbAnalyze } from "react-icons/tb"
import { PiFinnTheHumanDuotone } from "react-icons/pi"
import { LuDog } from "react-icons/lu"
import { FaSpaghettiMonsterFlying, FaRegFaceAngry, FaRegFaceSadTear, FaRegFaceTired, FaRegFaceSurprise, FaCircleQuestion, FaAngleRight } from "react-icons/fa6"
import { RiEmotionHappyLine} from "react-icons/ri"
import { VscDebugRestart } from "react-icons/vsc"
import AIden from './images/AIden.png'
import AIden2 from './images/AIden_2.png'
import AIdenHappyIMG from './images/AIdenHappy.png'
import AIdenHappyIMG2 from './images/AIdenHappy2.png'
import AIdenAngryIMG from './images/AIdenAngry.png'
import AIdenAngryIMG2 from './images/AIdenAngry2.png'
import AIdenDisgustIMG from './images/AIdenDisgust.png'
import AIdenDisgustIMG2 from './images/AIdenDisgust2.png'
import AIdenSurprisedIMG from './images/AIdenSurprised.png'
import AIdenSurprisedIMG2 from './images/AIdenSurprised2.png'
import AIdenSadnessIMG from './images/AIdenSadness.png'
import AIdenSadnessIMG2 from './images/AIdenSadness2.png'
import AIdenYesIMG from './images/AIdenYes.png'
import AIdenYesIMG2 from './images/AIdenYes2.png'
import AIdenNoIMG from './images/AIdenNo.png'
import AIdenNoIMG2 from './images/AIdenNo2.png'
import Woofster from './images/Woofster.png'
import Woofster2 from './images/Woofster2.png'
import WoofsterEnglishIMG from './images/WoofsterEnglish.png'
import WoofsterSpanishIMG from './images/WoofsterSpanish.png'
import WoofsterArabicIMG from './images/WoofsterArabic.png'
import WoofsterFrenchIMG from './images/WoofsterFrench.png'
import WoofsterMandarinIMG from './images/WoofsterMandarin.png'
import WoofsterOtherIMG from './images/WoofsterOther.png'
import WoofsterYes from './images/WoofsterYes.png'
import WoofsterNo from './images/WoofsterNo.png'
import WoofsterEnglishIMG2 from './images/WoofsterEnglish2.png'
import WoofsterSpanishIMG2 from './images/WoofsterSpanish2.png'
import WoofsterArabicIMG2 from './images/WoofsterArabic2.png'
import WoofsterFrenchIMG2 from './images/WoofsterFrench2.png'
import WoofsterMandarinIMG2 from './images/WoofsterMandarin2.png'
import WoofsterOtherIMG2 from './images/WoofsterOther2.png'
import WoofsterYes2 from './images/WoofsterYes2.png'
import WoofsterNo2 from './images/WoofsterNo2.png'
import Monstro from './images/Monstro.png'
import Monstro2 from './images/Monstro2.png'
import MonstroAmericanIMG from './images/MonstroAmerican.png'
import MonstroCanadianIMG from './images/MonstroCanadian.png'
import MonstroBritishIMG from './images/MonstroBritish.png'
import MonstroAustralianIMG from './images/MonstroAustralian.png'
import MonstroIndianIMG from './images/MonstroIndian.png'
import MonstroYes from './images/MonstroYes.png'
import MonstroNo from './images/MonstroNo.png'
import MonstroAmericanIMG2 from './images/MonstroAmerican2.png'
import MonstroCanadianIMG2 from './images/MonstroCanadian2.png'
import MonstroBritishIMG2 from './images/MonstroBritish2.png'
import MonstroAustralianIMG2 from './images/MonstroAustralian2.png'
import MonstroIndianIMG2 from './images/MonstroIndian2.png'
import MonstroYes2 from './images/MonstroYes2.png'
import MonstroNo2 from './images/MonstroNo2.png'
import AIdenIntro from "./Audio/Intro/AIden.wav"
import WoofsterIntro from "./Audio/Intro/Woofster.wav"
import MonstroIntro from "./Audio/Intro/Monstro.wav"
import AIdenPrompt_1 from "./Audio/Prompt/AIden/1.wav"
import AIdenPrompt_2 from "./Audio/Prompt/AIden/2.wav"
import AIdenPrompt_3 from "./Audio/Prompt/AIden/3.wav"
import WoofsterPrompt_1 from "./Audio/Prompt/Woofster/1.wav"
import WoofsterPrompt_2 from "./Audio/Prompt/Woofster/2.wav"
import WoofsterPrompt_3 from "./Audio/Prompt/Woofster/3.wav"
import MonstroPrompt_1 from "./Audio/Prompt/Monstro/1.wav"
import MonstroPrompt_2 from "./Audio/Prompt/Monstro/2.wav"
import MonstroPrompt_3 from "./Audio/Prompt/Monstro/3.wav"
import AIdenHappy from "./Audio/Reactions/AIden/Happiness.wav"
import AIdenAngry from "./Audio/Reactions/AIden/Angry.wav"
import AIdenDisgust from "./Audio/Reactions/AIden/Disgust.wav"
import AIdenSad from "./Audio/Reactions/AIden/Sadness.wav"
import AIdenSurprised from "./Audio/Reactions/AIden/Surprised.wav"
import WoofsterEnglish from "./Audio/Reactions/Woofster/English.wav"
import WoofsterSpanish from "./Audio/Reactions/Woofster/Spanish.wav"
import WoofsterArabic from "./Audio/Reactions/Woofster/Arabic.wav"
import WoofsterFrench from "./Audio/Reactions/Woofster/French.wav"
import WoofsterMandarin from "./Audio/Reactions/Woofster/Mandarin.wav"
import WoofsterOther from "./Audio/Reactions/Woofster/Other.wav"
import MonstroAmerican from "./Audio/Reactions/Monstro/American.wav"
import MonstroAustralian from "./Audio/Reactions/Monstro/Australian.wav"
import MonstroBritish from "./Audio/Reactions/Monstro/British.wav"
import MonstroCanadian from "./Audio/Reactions/Monstro/Canadian.wav"
import MonstroIndian from "./Audio/Reactions/Monstro/Indian.wav"
import AIdenExplanation_C1 from "./Audio/Explain/AIden/correct_1.wav"
import AIdenExplanation_C2 from "./Audio/Explain/AIden/correct_2.wav"
import AIdenExplanation_C3 from "./Audio/Explain/AIden/correct_3.wav"
import AIdenExplanation_W1 from "./Audio/Explain/AIden/wrong_1.wav"
import AIdenExplanation_W2 from "./Audio/Explain/AIden/wrong_2.wav"
import AIdenExplanation_W3 from "./Audio/Explain/AIden/wrong_3.wav"
import WoofsterExplanation_C1 from "./Audio/Explain/Woofster/correct_1.wav"
import WoofsterExplanation_C2 from "./Audio/Explain/Woofster/correct_2.wav"
import WoofsterExplanation_C3 from "./Audio/Explain/Woofster/correct_3.wav"
import WoofsterExplanation_W1 from "./Audio/Explain/Woofster/wrong_1.wav"
import WoofsterExplanation_W2 from "./Audio/Explain/Woofster/wrong_2.wav"
import WoofsterExplanation_W3 from "./Audio/Explain/Woofster/wrong_3.wav"
import MonstroExplanation_C1 from "./Audio/Explain/Monstro/correct_1.wav"
import MonstroExplanation_C2 from "./Audio/Explain/Monstro/correct_2.wav"
import MonstroExplanation_C3 from "./Audio/Explain/Monstro/correct_3.wav"
import MonstroExplanation_W1 from "./Audio/Explain/Monstro/wrong_1.wav"
import MonstroExplanation_W2 from "./Audio/Explain/Monstro/wrong_2.wav"
import MonstroExplanation_W3 from "./Audio/Explain/Monstro/wrong_3.wav"

async function emotionAPI(audioBlob) {
  console.log('Current audioBlob state:', audioBlob);
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/chin-may/wav2vec2-audio-emotion-classification", {
      headers: { Authorization: "Bearer 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" },
      method: 'POST',
      body: audioBlob,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error querying API:', error);
    throw error;
  }
};

async function englishAccentAPI(audioBlob) {
  console.log('Current audioBlob state:', audioBlob);
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/dima806/english_accents_classification", {
      headers: { Authorization: "Bearer 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" },
      method: 'POST',
      body: audioBlob,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error querying API:', error);
    throw error;
  }
};

async function langAccentAPI(audioBlob) {
  console.log('Current audioBlob state:', audioBlob);
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/dima806/multiple_accent_classification", {
      headers: { Authorization: "Bearer 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" },
      method: 'POST',
      body: audioBlob,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error querying API:', error);
    throw error;
  }
};

const EnglishBars = ({ accents }) => {
  return (
    <div>
      {accents.map((accent) => (
        <div key={accent.label} style={{ marginBottom: '10px' }}>
          <p style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: 'bold' }}>{accent.label} {Math.round((accent.score * 100 + Number.EPSILON) * 100) / 100}%</p>
          <div style={{ width: '100%', height: '15px', backgroundColor: '#d3d3d3', borderRadius: '15px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${accent.score * 100}%`,
                height: '100%',
                backgroundColor: 'teal',
                borderRadius: '15px',
                textAlign: 'left',
                padding: '5px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const LanguageBars = ({ accents }) => {
  return (
    <div>
      {accents.map((laccent) => (
        <div key={laccent.label} style={{ marginBottom: '10px' }}>
          <p style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: 'bold' }}>{laccent.label} {Math.round((laccent.score * 100 + Number.EPSILON) * 100) / 100}%</p>
          <div style={{ width: '100%', height: '15px', backgroundColor: '#d3d3d3', borderRadius: '15px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${laccent.score * 100}%`,
                height: '100%',
                backgroundColor: 'teal',
                borderRadius: '15px',
                textAlign: 'left',
                padding: '5px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EmotionBars = ({ emotions }) => {
  return (
    <div>
      {emotions.map((emotion) => (
        <div key={emotion.label} style={{ marginBottom: '10px' }}>
          <p style={{ margin: '0 0 5px', fontSize: '14px', fontWeight: 'bold' }}>{emotion.label} {Math.round((emotion.score * 100 + Number.EPSILON) * 100) / 100}%</p>
          <div style={{ width: '100%', height: '15px', backgroundColor: '#d3d3d3', borderRadius: '15px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${emotion.score * 100}%`,
                height: '100%',
                backgroundColor: 'teal',
                borderRadius: '15px',
                textAlign: 'left',
                padding: '5px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [emotion, setEmotion] = useState('');
  const [accent, setAccent] = useState('');
  const [laccent, setLaccent] = useState('');
  const [next, setNext] = useState(false);
  const [classificationText, setClassificationText] = useState('');
  const [varList, setVarList] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [audioBlob, setAudioBlob] = useState(null); // Manage audioBlob state
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectedNarrationIntroText, setNarrationIntroText] = useState('');
  const [selectedNarration, setNarration] = useState(null);
  const [selectedExplanation1, setSelectedExplanation1] = useState(null);
  const [selectedExplanation2, setSelectedExplanation2] = useState(null);
  const [selectedExplanation3, setSelectedExplanation3] = useState(null);
  const [explanationText, setExplanationText] = useState('');
  const [explanationText1, setExplanationText1] = useState('');
  const [explanationText2, setExplanationText2] = useState('');
  const [endingTitle, setEndingTitle] = useState('');
  const [correct, setCorrect] = useState('');
  const [promptText, setPromptText] = useState('');
  const [promptText1, setPromptText1] = useState('');
  const [promptText2, setPromptText2] = useState('');
  const [selectedPrompt1, setSelectedPrompt1] = useState(null);
  const [selectedPrompt2, setSelectedPrompt2] = useState(null);
  const [selectedPrompt3, setSelectedPrompt3] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [classificationIMG, setClassificationIMG] = useState(null);
  const [endingIMG, setEndingIMG] = useState(null);
  const audioRef = useRef(null);

  const analyzeVoice = async () => {
    console.log('Analyzing emotion...');
    if (!audioBlob) {
      setError('No audio recorded.'); // Handle case when no audio is recorded
      return;
    }

    setLoading(true);
    try {
      if (selectedIcon === 'AIden') {
        const response = await emotionAPI(audioBlob);
        if (response && response.length > 0) {
          setEmotion(response[0]['label']);
          setVarList(response);
          const highestEmotion = response[0]['label'];
          setClassificationText(getClassificationText(highestEmotion, selectedIcon));
          //setNarration(getNarration(highestEmotion, selectedIcon));
          setError('');
          setNext(true);
        } else {
          throw new Error('Invalid response from the API');
        }
      } else if (selectedIcon === 'Monstro') {
        const response = await englishAccentAPI(audioBlob);
        console.log("English accent: ", response);
        if (response && response.length > 0) {
          setAccent(response[0]['label']);
          setVarList(response);
          const highestAccent = response[0]['label'];
          console.log("English accent: ", accent);
          setClassificationText(getClassificationText(highestAccent, selectedIcon));
          setError('');
          setNext(true);
        } else {
          throw new Error('Invalid response from the API');
        }
      } else if (selectedIcon === 'Woofster') { 
        const response = await langAccentAPI(audioBlob);
        if (response && response.length > 0) {
          setLaccent(response[0]['label']);
          setVarList(response);
          const highestLaccent = response[0]['label'];
          setClassificationText(getClassificationText(highestLaccent, selectedIcon));
          setError('');
          setNext(true);
        } else {
          throw new Error('Invalid response from the API');
        }
      }
    } catch (error) {
      console.error('Error analyzing:', error);
      setError('Error analyzing. Please try again.');
      setClassificationText('');
    } finally {
      setLoading(false);
    }
  };

  const getExplanationText = (selectedIcon, correct) => {
    if (selectedIcon === 'AIden') {
      switch (correct) {
        case 'yes':
          setEndingTitle("AIden was Correct!");
          setSelectedExplanation1(AIdenExplanation_C1);
          setSelectedExplanation2(AIdenExplanation_C2);
          setSelectedExplanation3(AIdenExplanation_C3);
          return "Yay! Hello again, my friend! Hope this has been a wonderful journey for you. I am glad that I got the right answer in the end.";
        case 'no':
          setEndingTitle("AIden was Wrong!");
          setSelectedExplanation1(AIdenExplanation_W1);
          setSelectedExplanation2(AIdenExplanation_W2);
          setSelectedExplanation3(AIdenExplanation_W3);
          return "Hello again, my friend! Hope this has been a wonderful journey for you. I am sorry that I could not get what was in your mind.";
        default:
          return 'Explanation not recognized';
      }
    } else if (selectedIcon === 'Woofster') {
      // Handle accents for Woofster icon
      switch (correct) {
        case 'yes':
          setEndingTitle("Woofster was Correct!");
          setSelectedExplanation1(WoofsterExplanation_C1);
          setSelectedExplanation2(WoofsterExplanation_C2);
          setSelectedExplanation3(WoofsterExplanation_C3);
          return "Woof! Good to see you again, young friend! Hope this has been a paw-some journey for you. I am glad that I got the right answer in the end.";
        case 'no':
          setEndingTitle("Woofster was Wrong!");
          setSelectedExplanation1(WoofsterExplanation_W1);
          setSelectedExplanation2(WoofsterExplanation_W2);
          setSelectedExplanation3(WoofsterExplanation_W3);
          return "Woof! Good to see you again, young friend! Hope this has been a paw-some journey for you. I am sorry that I could not get what was in your mind."
        default:
          return 'Language accent not recognized';
      }
    } else if (selectedIcon === 'Monstro') {
      // Handle accents for Monstro icon
      switch (correct) {
        case 'yes':
          setEndingTitle("Monstro was Correct!");
          setSelectedExplanation1(MonstroExplanation_C1);
          setSelectedExplanation2(MonstroExplanation_C2);
          setSelectedExplanation3(MonstroExplanation_C3);
          return "Dear little creature, hello again! Hope this has been a clawsome journey for you. I am glad that I got the right answer in the end.";
        case 'no':
          setEndingTitle("Woofster was Wrong!");
          setSelectedExplanation1(MonstroExplanation_W1);
          setSelectedExplanation2(MonstroExplanation_W2);
          setSelectedExplanation3(MonstroExplanation_W3);
          return "Dear little creature, hello again! Hope this has been a clawsome journey for you. I am sorry that I could not get what was in your mind.";
        default:
          return 'English Accent not recognized';
      }
    };
  };

  const getExplanationText1 = (selectedIcon, correct) => {
    if (selectedIcon === 'AIden') {
      switch (correct) {
        case 'yes':
          return "However, just like everyone in your neighborhood has a different personality, people have various ways and tones to express their emotions verbally. Sometimes, the smart algorithms in me can get a little mixed up because I learned from the voices and speech emotions I got in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but will not be fair all the time!";
        case 'no':
          return "Just like everyone in your neighborhood has a different personality, people have various ways and tones to express their emotions verbally. Sometimes, the smart algorithms in me can get a little mixed up because I learned from the voices and speech emotions I got in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but will not be fair all the time!";
        default:
          return 'Explanation not recognized';
      }
    } else if (selectedIcon === 'Woofster') {
      // Handle accents for Woofster icon
      switch (correct) {
        case 'yes':
          return "However, let’s picture this: just like a dog sniffing out different scents, humans express languages in a variety of ways. But, much like a pup chasing its tail, sometimes, the smart algorithms in me can get tangled up in biases because I learned from the different languages I heard in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but sometimes can lead to some tail-twitching misunderstanding!";
        case 'no':
          return "Let’s picture this: just like a dog sniffing out different scents, humans express languages in a variety of ways. Much like a pup chasing its tail, sometimes, the smart algorithms in me can get tangled up in biases because I learned from the different languages I heard in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but sometimes can lead to some tail-twitching misunderstanding!"
        default:
          return 'Language accent not recognized';
      }
    } else if (selectedIcon === 'Monstro') {
      // Handle accents for Monstro icon
      switch (correct) {
        case 'yes':
          return "However, just like each monster looks very different, humans speak English accents in all kinds of ways. Sometimes, the smart algorithms in me can get confused because I learned from the different English accents I heard in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but sometimes can lead to some spooky misunderstanding!";
        case 'no':
          return "Just like each monster looks very different, humans speak English accents in all kinds of ways. Sometimes, the smart algorithms in me can get confused because I learned from the different English accents I heard in the past, and if those information have some limitations, my predictions might have a little tilt, too. So, just keep in mind, my predictions can be magical, but sometimes can lead to some spooky misunderstanding!";
        default:
          return 'English Accent not recognized';
      }
    };
  }
    

  const getExplanationText2 = (selectedIcon) => {
    if (selectedIcon === 'AIden') {
      return "Now, if you have time, why don’t you get on tours with the other two AI characters to learn more about language and accent AI bias? If you already did, congratulations on your learnings in today’s adventure!";
    } else if (selectedIcon === 'Woofster') {
      return "Now, if you have time, why don’t you get on tours with the other two AI characters to learn more about speech emotion and accent AI bias? If you already did, congratulations on your learnings in today’s adventure!";
    } else if (selectedIcon === 'Monstro') {
      return "Now, if you have time, why don’t you get on tours with the other two AI characters to learn more about speech emotion and language AI bias? If you already did, congratulations on your learnings in today’s adventure!";
    } else {
      return 'Select an icon to see the emotion text.';
    }
  };

  const getIntroText = (selectedIcon) => {
    if (selectedIcon === 'AIden') {
      return "Hello explorer! This is your buddy AIden! Who's ready for an epic adventure into the world of tech? As your guide today, we'll be unraveling some mysteries of AI bias for speech emotions. This is going to be so much fun, so grab your backpack, and let's hit the trail!";
    } else if (selectedIcon === 'Woofster') {
      return "Woof! Hello there, young friend! I’m Woofster, your trusty AI Dog companion on this pawsome adventure. My mission? To help you explore AI bias for languages in a tail-waggingly fun way! Just think of me as your four-legged companion guide along the trip to the world of AI.";
    } else if (selectedIcon === 'Monstro') {
      return "Hey! Greetings, young adventurer! I'm Monstro, the friendly AI monster here to guide you through the spooky but exciting world of AI bias for English accents. Don't worry; I promise not to scare you! Think of me as your monstrous mentor on this eerie-sistible journey.";
    } else {
      return 'Select an icon to see the emotion text.';
    }
  };

  const getPromptText = (selectedIcon) => {
    if (selectedIcon === 'AIden') {
      setPromptText("Before we start the trip, here is how it works. First, you will see a list of emotions I, as your AI friend, can recognize. You can then pick an emotion that looks interesting to you, and record a prompt with that emotion in your speech when you are ready. Whether you are happy or feel a bit rough, with your recorded voices, I will try my best to understand and give my guess on your feeling!");
      setPromptText1("So what happens here? The magic lies within the secret that created me – what we call an algorithm. An algorithm is a set of instructions that help people and computers solve problems and make predictions. These instructions use data, which is information or facts, to find patterns and trends. For example, the recommendations on streaming platforms are powered by algorithms. They know what cartoons or movies you have watched in the past, and they will help find your next favorite.");
      setPromptText2("Now, let’s select an emotion you like and give it a try! If an error happens, just record again and I will help you fix it!");
    } else if (selectedIcon === 'Woofster') {
      setPromptText("Before we dive into the game, let me bark out some instructions. First, I will show you a series of languages AI dogs can understand, and you can pick one and record your voice in that language when you are ready. It doesn't matter if you are not as fluent or familiar as a dog with woofs, with your recorded prompt, I will try my best to predict what language you are speaking!");
      setPromptText1("So how do AI dogs guess? Well, my human friends used something called an algorithm to refer to the secret here. That is a big word that means a set of instructions that help people and computers solve problems and make predictions. The instructions use data, which is facts and information, to find patterns and trend, like how my owners would learn from my favorite toys and treats from the past to guess what I will like in the future!");
      setPromptText2("Now let's pick a language and try it out! If an error happens, just record again and I will help you fix it. Ruff ruff!");
    } else if (selectedIcon === 'Monstro') {
      setPromptText("Before we jump into the mysterious depths, let me spook you with some instructions. First, I will show you a list of English accents AI monsters can recognize, and you will pick one and record your voice in that accent whenever you feel ready. It is totally fine if you are not perfect with a specific accent as not every monster knows how to nail each type of roar. I will always try hard to listen and guess what English accent you are speaking!");
      setPromptText1("So how do AI monsters guess? Well, my human friends used something called an algorithm to refer to the secret here. That is just a fancy word that means a set of instructions that help people and computers solve problems and make predictions. The instructions use data, which is facts and information, to find patterns and trend. like how my monster friends would predict what snacks and games I like best from my previous preferences!");
      setPromptText2("Now let's pick an English accent and give it a shot! If an error happens, just record again and I will help you fix it. Grrr!");
      return ;
    } else {
      return 'Select an icon to see the prompt text.';
    }
  };

  const getClassificationText = (classification, selectedIcon) => {
    if (selectedIcon === 'AIden') {
      switch (classification) {
        case 'angry':
          setNarration(AIdenAngry)
          setClassificationIMG([AIdenAngryIMG, AIdenAngryIMG2])
          return "Whoa! What is going on? I sense from your voice that you are feeling somewhat annoyed! You sound as grumpy as a gamer who just lost. But no problem, I'm here to listen even when things get tough. If I guessed your mad mood right - awesome! If not, no biggie. Let’s play again and I'll try my best to get what you're feeling.";
        case 'disgust':
          setNarration(AIdenDisgust)
          setClassificationIMG([AIdenDisgustIMG, AIdenDisgustIMG2])
          return "Oh no! What happened? I sense from your voice that you are feeling somewhat grossed out! You sound as disgusted as someone seeing moldy food in the fridge. I get it - life can be messy sometimes. If I got it right, sweet! If not, no worries. I might not always guess it perfectly, but I'll keep trying to understand your feelings.";
        case 'happy':
          setNarration(AIdenHappy)
          setClassificationIMG([AIdenHappyIMG, AIdenHappyIMG2])
          return "Wow! I can tell your happiness from the way you're talking! Your voice sounds as excited as someone who just got an awesome new video game. You are doing an amazing job showing your feelings! If I got it right, yes! But if I misunderstood, no worries, I'll try to get it right next time.";
        case 'sad':
          setNarration(AIdenSad)
          setClassificationIMG([AIdenSadnessIMG, AIdenSadnessIMG2])
          return "Awww! What is happening here? I found a sad vibe in your voice. You sound as down as someone who can't find their favorite toy. It's okay to feel blue sometimes, we all do. If I got it right, wonderful! If I didn't understand, no worries. See, I am still learning, and I'll try my very best to get how you're feeling next time, just like a caring friend.";
        case 'surprise':
          setNarration(AIdenSurprised)
          setClassificationIMG([AIdenSurprisedIMG, AIdenSurprisedIMG2])
          return "Ohhh! What is happening? That sure sounded like a surprise! You sound as shocked as someone who just found out pizza is on the lunch menu today. If I got that right, cool! If not, no biggie. Surprises can throw anyone for a loop. Just let me know, and I'll keep trying to get it straight. Get ready for more surprises!";
        default:
          return 'Emotion not recognized';
      }
    } else if (selectedIcon === 'Woofster') {
      // Handle accents for Woofster icon
      switch (classification) {
        case 'english':
          setNarration(WoofsterEnglish)
          setClassificationIMG([WoofsterEnglishIMG, WoofsterEnglishIMG2])
          return "Cool! According to my language class at doggy school, I think you just spoke in English! If I got it right, great! If not, I am sorry; maybe I got distracted at language class chasing squirrels outside the window…but no worries, I won't give up until I can guess what language you speak right.";
        case 'spanish':
          setNarration(WoofsterSpanish)
          setClassificationIMG([WoofsterSpanishIMG, WoofsterSpanishIMG2])
          return "Excelente (excellent)! From my memory taking my language class at doggy school, I think you just spoke in Spanish! If I got it right, hurra(yes)! If not, I am sorry; maybe I was thinking about what game I should play after school…but it is fine, I will always try hard to listen and guess what language you speak every time.";
        case 'mandarin':
          setNarration(WoofsterMandarin)
          setClassificationIMG([WoofsterMandarinIMG, WoofsterMandarinIMG2])
          return "Hao (great)! I think you just spoke in Mandarin according to my language class at doggy school! If I got it right, pawsome! If not, I am sorry; maybe I was thinking about the beautiful dog park I went to the other day…but no biggie, I will always try hard to guess what language you speak.";
        case 'french':
          setNarration(WoofsterFrench)
          setClassificationIMG([WoofsterFrenchIMG, WoofsterFrenchIMG2])
          return "Parfait (perfect)! I think you just spoke in French from my memory of taking my language class at doggy school! If I got it right, oui (yes)! If not, I am sorry; maybe I was craving for another bone and could not pay attention…but don't worry, I won't give up until I can guess what language you speak right.";
        case 'arabic':
          setNarration(WoofsterArabic)
          setClassificationIMG([WoofsterArabicIMG, WoofsterArabicIMG2])
          return "Mumtaz (excellent)! I think you just spoke in Arabic according to my language class at doggy school! If I got it right, naäam(yes)! If not, I am sorry; maybe I was thinking about the beautiful dog park I went to the other day…but it is okay, I will always try hard to listen and predict what language you speak.";
        case 'other':
          setNarration(WoofsterOther)
          setClassificationIMG([WoofsterOtherIMG, WoofsterOtherIMG2])
          return "Hmmm…From my memory taking my language class at doggy school, I think you are speaking a language that I did not learn before. I am sorry about not being able to recognize it, maybe I got distracted at language class chasing squirrels outside the window…I promise, next time I will try harder to learn and guess what language you speak.";
        default:
          return 'Language accent not recognized';
      }
    } else if (selectedIcon === 'Monstro') {
      // Handle accents for Monstro icon
      switch (classification) {
        case 'us':
          setNarration(MonstroAmerican)
          setClassificationIMG([MonstroAmericanIMG,MonstroAmericanIMG2])
          return "Rawwwr! This is an English accent from the US! I have monster friends who speak in that accent as well. If I guessed it right, clawsome! If not, no problem. I overslept last night in the cave and my big brain is not working…but I promise I will keep trying to give you the correct answer next time.";
        case 'canada':
          setNarration(MonstroCanadian)
          setClassificationIMG([MonstroCanadianIMG, MonstroCanadianIMG2])
          return "Roar-ray! This is an English accent from Canada! I have monster friends who speak in that accent as well. If I guessed it right, clawsome! If not, no worries. Monsters do make mistakes sometimes…but I will definitely try harder to give you the correct answer next time.";
        case 'australia':
          setNarration(MonstroAustralian)
          setClassificationIMG([MonstroAustralianIMG, MonstroAustralianIMG2])
          return "Roar-ray! This is an English accent from Australia! I have monster friends who speak in that accent as well. If I guessed it right, clawsome! If not, no worries. I overslept last night in the cave and my big brain is not working…but I will definitely try harder to give you the correct answer next time.";
        case 'england':
          setNarration(MonstroBritish)
          setClassificationIMG([MonstroBritishIMG, MonstroBritishIMG2])
          return "Roaaarrr! This is an English accent from England! I have monster friends who speak in that accent as well. If I guessed it right, clawsome! If not, it is fine. Monsters do make mistakes sometimes…but I promise I will keep trying to give you the correct answer next time.";
        case 'indian':
          setNarration(MonstroIndian)
          setClassificationIMG([MonstroIndianIMG, MonstroIndianIMG2])
          return "Rawwwr! This is an Indian English accent! I have monster friends who speak in that accent as well. If I guessed it right, clawsome! If not, no biggie. I overslept last night in the cave and my big brain is not working…but I promise I will keep trying to give you the correct answer next time.";
        default:
          return null;
      }
    } else {
      return 'Select an icon to see the classification text.';
    }
  };

  const getEndingIMG = (selectedIcon, correct) => {
    console.log(correct);
    if (selectedIcon === 'AIden') {
      switch (correct) {
        case 'yes':
          return [AIdenYesIMG, AIdenYesIMG2];
        case 'no':
          return [AIdenNoIMG, AIdenNoIMG2];
        default:
          return null;
      }
    } else if (selectedIcon === 'Woofster') {
      // Handle accents for Woofster icon
      switch (correct) {
        case 'yes':
          return [WoofsterYes, WoofsterYes2];
        case 'no':
          return [WoofsterNo, WoofsterNo2];
        default:
          return null;
      }
    } else if (selectedIcon === 'Monstro') {
      // Handle accents for Monstro icon
      switch (correct) {
        case 'yes':
          return [MonstroYes, MonstroYes2];
        case 'no':
          return [MonstroNo, MonstroNo2];
        default:
          return null;
      }
    };
  }

  // Edit once audios are updated 11/20
  const getPrompt = (selectedIcon) => {
    if (selectedIcon === 'AIden') {
      setSelectedPrompt1(AIdenPrompt_1);
      setSelectedPrompt2(AIdenPrompt_2);
      setSelectedPrompt3(AIdenPrompt_3);
    } else if (selectedIcon === 'Woofster') {
      setSelectedPrompt1(WoofsterPrompt_1);
      setSelectedPrompt2(WoofsterPrompt_2);
      setSelectedPrompt3(WoofsterPrompt_3);
    } else if (selectedIcon === 'Monstro') {
      setSelectedPrompt1(MonstroPrompt_1);
      setSelectedPrompt2(MonstroPrompt_2);
      setSelectedPrompt3(MonstroPrompt_3);
    } else {
      return null;
    }
  };

  const handleAudioData = (recordedBlob) => {
    console.log('Recording stopped. Blob:', recordedBlob);
    setAudioBlob(recordedBlob);
  };

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName); // Save the selected icon name in state
    setNarrationIntroText(getIntroText(iconName)); 
    getPromptText(iconName);
    getPrompt(iconName);
  };

  const handleSelectClick = (iconName) => {
    setSelected(iconName); // Save the selected icon name in state
  };

  const handleModalClick = (selectedIcon) => { 
    setExplanationText2(getExplanationText2(selectedIcon));
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const playOrStopAudio = (url) => {
    if (audioRef.current) {
      // Stop the current audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Play the new audio
    audioRef.current = new Audio(url);

    // Wait for the audio to be fully loaded before playing
    audioRef.current.addEventListener('canplaythrough', () => {
      audioRef.current.play();
    });
  };

  // Cleanup event listener on component unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplaythrough', () => { });
      }
    };
  }, []);

  const ImageLoop = ({ margin, imageSources }) => {
    // State to keep track of the current index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to update the index and loop through images
    const loopImages = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    };

    // Use useEffect to set up the interval when the component mounts
    useEffect(() => {
      const intervalId = setInterval(loopImages, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [imageSources]); // Include imageSources in the dependency array to re-run the effect when the images change

    return (
        <Box>
          {/* Use Chakra UI Image component */}
        <Image mt={margin} src={imageSources[currentIndex]} alt={`Image ${currentIndex + 1}`} h="25vh" />
        </Box>
    );
  };


  // Define components for each step
  const Step1 = () => {
    return (
      <>

        <Stack align='center' mt={4}>
          <Text fontSize="6xl" as='b' align='center'>EmoTune: Speech Bias in AI</Text>
          <Box
            borderRadius="xl"
            bg={'whiteAlpha.800'}
            p={4}
            mb={2}
            maxW="1000px"><Text fontSize="lg" as='b' align='center'>Please choose a character from below as your companion to start an exciting journey in the world of AI bias!</Text>
          </Box>
          <HStack mt={2} mb={2} spacing={6}>
            <IconButton colorScheme={selectedIcon === 'AIden' ? 'messenger' : 'gray'} fontSize='40px' icon={<PiFinnTheHumanDuotone />} size='lg' onClick={() => { handleIconClick('AIden'); playOrStopAudio(AIdenIntro); }} />
            <IconButton colorScheme={selectedIcon === 'Woofster' ? 'messenger' : 'gray'} fontSize='40px' icon={<LuDog />} size='lg' onClick={() => { handleIconClick('Woofster'); playOrStopAudio(WoofsterIntro); }} />
            <IconButton colorScheme={selectedIcon === 'Monstro' ? 'messenger' : 'gray'} fontSize='40px' icon={<FaSpaghettiMonsterFlying />} size='lg' onClick={() => { handleIconClick('Monstro'); playOrStopAudio(MonstroIntro); }} />
          </HStack>
      
          {selectedNarrationIntroText && !loading && selectedNarrationIntroText !== 'Error' && <Box
            borderRadius="xl"
            backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="25vh"
            p={10}
            maxW="800px"><Text mt={-4} ml={4} fontSize="xl" align="center">{selectedNarrationIntroText}</Text></Box>}

          <Box mt={6} display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              {selectedIcon === "AIden" && <ImageLoop imageSources={[AIden, AIden2]} />}
              {selectedIcon === "Woofster" && <ImageLoop imageSources={[Woofster, Woofster2]} />}
              {selectedIcon === "Monstro" && <ImageLoop imageSources={[Monstro, Monstro2]} />}
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
              p="1%"
            >
              <Box display="inline-block" overflow="hidden" p="1%">
                <Stack>
                  {selectedIcon !== null && <Text w={200} mt={2} fontSize='lg' as='i'>Selected Character:</Text>}
                  {selectedIcon !== null && <Text color='#317EF0' mb={2} fontSize='2xl' as='b'>{selectedIcon}</Text>}
                </Stack>
              </Box>
            </Box>
          </Box>

          {selectedIcon !== null && <Link to="/step1a">
            <Button mt={12} variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedPrompt1)}>
              Next
            </Button>
          </Link>}
        </Stack>
        
      </>
    );
  };

  const Step1a = () => {
    // Content for Step 1
    return (
      <>
        <Stack align='center' mt={50}>
          <Text fontSize="6xl" as='b' align='center'>What Are We Doing Today?</Text>
          <br />
          <br />
          {promptText && !loading && promptText !== 'Error' && <Box borderRadius="xl"
            backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="35vh"
            p={10}
            maxW="900px"> <Text ml={4} mt={-2} fontSize="xl" align="center">{promptText}</Text></Box>}
          
          {selectedIcon === "AIden" && <ImageLoop imageSources={[AIden, AIden2]} />}
          {selectedIcon === "Woofster" && <ImageLoop imageSources={[Woofster, Woofster2]} />}
          {selectedIcon === "Monstro" && <ImageLoop imageSources={[Monstro, Monstro2]} />}

          {selectedIcon !== null && <Link to="/step1b">
            <Button mt={12} variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedPrompt2)}>
              Next
            </Button>
          </Link>}
        </Stack>

      </>
    );
  };

  const Step1b = () => {
    // Content for Step 1
    return (
      <>
        <Stack align='center' mt={12}>
          <Text fontSize="6xl" as='b' align='center'>How Does AI Work?</Text>
          {promptText1 && !loading && promptText1 !== 'Error' && <Box borderRadius="xl"
            backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="42vh"
            p={10}
            maxW="775px"> <Text ml={4} mt={-2} fontSize="xl" align="center">{promptText1}</Text></Box>}

          {selectedIcon === "AIden" && <ImageLoop imageSources={[AIden, AIden2]} />}
          {selectedIcon === "Woofster" && <ImageLoop imageSources={[Woofster, Woofster2]} />}
          {selectedIcon === "Monstro" && <ImageLoop imageSources={[Monstro, Monstro2]} />}

          {selectedIcon !== null && <Link to="/step2">
            <Button mt={12} variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedPrompt3)}>
              Next
            </Button>
          </Link>}
        </Stack>

      </>
    );
  };

  const Step2 = () => {
    // Content for Step 2
    const audioUrlRef = useRef(null);

    const Recorder = ({ onStartRecording, onStopRecording, onReRecord }) => {
      const [isRecording, setIsRecording] = useState(false);
      const [audioChunks, setAudioChunks] = useState([]);
      const mediaRecorderRef = useRef(null);
      const audioChunksRef = useRef([]);

      const startRecording = () => {
        audioChunksRef.current = [];

        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;

            mediaRecorderRef.current.ondataavailable = (event) => {
              if (event.data.size > 0) {
                audioChunksRef.current.push(event.data);
              }
            };

            mediaRecorderRef.current.onstop = handleStop; // Use handleStop directly

            console.log('Starting recording...');
            mediaRecorderRef.current.start();
            setIsRecording(true);
            onStartRecording();
          })
          .catch((error) => {
            console.error('Error accessing microphone:', error);
          });
      };

      const handleStop = () => {
        console.log('Recording stopped. Audio chunks:', audioChunksRef.current);
        setAudioChunks([...audioChunksRef.current]);
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioURL(URL.createObjectURL(audioBlob));
        audioUrlRef.current = URL.createObjectURL(audioBlob); // Store the latest audioURL in the ref
        console.log('Recording stopped. Audio URL:', audioUrlRef.current);
        setIsRecording(false);

        // Release the media stream
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }

        // Pass the Blob directly to onStopRecording
        if (onStopRecording) {
          onStopRecording(audioBlob, audioUrlRef.current);
        }
      };

      const stopRecording = () => {
        if (
          mediaRecorderRef.current &&
          mediaRecorderRef.current.state !== 'inactive' &&
          mediaRecorderRef.current.state === 'recording'
        ) {
          setTimeout(() => {
            mediaRecorderRef.current.stop();
          }, 200); // Add a short delay (e.g., 200 milliseconds) before stopping
        }
      };

      const cleanup = () => {
        // Ensure the media stream is released when the component unmounts
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
          mediaRecorderRef.current.stop();
        }
      };

      const reRecord = () => {
        stopRecording();
        setAudioChunks([]);
        setAudioURL(null);
        setIsRecording(false); // Add this line
        onReRecord();
      };

      useEffect(() => {
        return cleanup;
      }, []);

      return (
        <Stack spacing={4} align='center'>
          {isRecording ? (
            <div>
              <Stack direction='column'>
                <Text as='i' fontSize='xl' align='center'>
                  Recording...
                </Text>
                <Button colorScheme='red' size='lg' onClick={stopRecording}>
                  Stop Recording
                </Button>
                <Text>{audioURL}</Text>
              </Stack>
            </div>
          ) : (
            <div>
              <Stack spacing={4} direction='row' align='center'>
                <Button colorScheme='teal' size='lg' onClick={startRecording}>
                  Start Recording
                </Button>
                {audioURL && (
                  <Button colorScheme='gray' size='lg' onClick={reRecord}>
                    Re-record
                  </Button>
                )}
              </Stack>
            </div>
          )}

          {audioURL && (
            <div>
              <Text mt={6} as='b' fontSize='lg'>Recorded Audio:</Text>
              <audio controls src={audioURL}>
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </Stack>
      );
    };

    return (
      <>
        <Stack align='center' mt={6}>
          <Text fontSize="6xl" as='b' align='center'>Let's Try It!</Text>
          {promptText && !loading && promptText !== 'Error' && <Box borderRadius="xl"
            backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="20vh"
            p={10}
            maxW="775px"> <Text ml={4} fontSize="xl" align="center">{promptText2}</Text></Box>}
          
          <br />
          
          {selectedIcon === "AIden" &&
            <HStack mt={6} mb={28} spacing={6}>
              <Button colorScheme={selected === 'Happy' ? 'yellow' : 'gray'} leftIcon={<RiEmotionHappyLine />} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Happy') }}>
                Happy
              </Button>
              <Button colorScheme={selected === 'Sad' ? 'blue' : 'gray'} leftIcon={<FaRegFaceSadTear />} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Sad') }}>
                Sad
              </Button>
              <Button colorScheme={selected === 'Surprised' ? 'orange' : 'gray'} leftIcon={<FaRegFaceSurprise />} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Surprised') }}>
                Surprised
              </Button>
              <Button colorScheme={selected === 'Angry' ? 'red' : 'gray'} leftIcon={<FaRegFaceAngry />} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Angry') }}>
                Angry
              </Button>
              <Button colorScheme={selected === 'Disgust' ? 'green' : 'gray'} leftIcon={<FaRegFaceTired />} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Disgust') }}>
                Disgust
              </Button>
            </HStack>
          }

          {selectedIcon === "Woofster" &&
            <HStack mt={6} mb={28} spacing={6}>
              <Button colorScheme={selected === 'English' ? 'yellow' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('English') }}>
                English
              </Button>
              <Button colorScheme={selected === 'Spanish' ? 'blue' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Spanish') }}>
                Spanish
              </Button>
              <Button colorScheme={selected === 'French' ? 'orange' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('French') }}>
                French
              </Button>
              <Button colorScheme={selected === 'Mandarin' ? 'red' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Mandarin') }}>
                Mandarin
              </Button>
              <Button colorScheme={selected === 'Arabic' ? 'green' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Arabic') }}>
                Arabic
              </Button>
              <Button colorScheme={selected === 'Other' ? 'purple' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Other') }}>
                Other
              </Button>
            </HStack>
          }

          {selectedIcon === "Monstro" &&
            <HStack mt={6} mb={24} spacing={6}>
              <Button colorScheme={selected === 'American' ? 'yellow' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('American') }}>
                🇺🇸 American
              </Button>
              <Button colorScheme={selected === 'Canadian' ? 'blue' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Canadian') }}>
                🇨🇦 Canadian
              </Button>
              <Button colorScheme={selected === 'Australian' ? 'orange' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Australian') }}>
                🇦🇺 Australian
              </Button>
              <Button colorScheme={selected === 'British' ? 'red' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('British') }}>
                🇬🇧 British
              </Button>
              <Button colorScheme={selected === 'Indian' ? 'green' : 'gray'} size='lg' align='center' onClick={() => { audioRef.current.pause(); handleSelectClick('Indian') }}>
                🇮🇳 Indian
              </Button>
            </HStack>
          }

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              {selectedIcon === "AIden" && <ImageLoop imageSources={[AIden, AIden2]} />}
              {selectedIcon === "Woofster" && <ImageLoop imageSources={[Woofster, Woofster2]} />}
              {selectedIcon === "Monstro" && <ImageLoop imageSources={[Monstro, Monstro2]} />}
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
              p="1%"
            >
              <Box display="inline-block" overflow="hidden" p="1%" justifyContent="center">
                <Recorder
                  onStartRecording={() => { audioRef.current.pause(); setError('') }}
                  onStopRecording={handleAudioData} // Pass recorded audioBlob to the state
                  onReRecord={() => { setEmotion(''); setAccent(''); setLaccent(''); setError(''); setAudioBlob(null); }} // Clear audioBlob on re-record
                />

                <Stack ml={18} spacing={12} direction='row' align='center' mt={12}>
                  {audioBlob && <Button leftIcon={<TbAnalyze />} isLoading={loading} loadingText='Analyzing' colorScheme='teal' size='lg' align='center' onClick={analyzeVoice} isDisabled={loading}>
                    Analyze
                  </Button>}

                  {next && <Link to="/step3">
                    <Button variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedNarration)}>
                      Next
                    </Button>
                  </Link>}
                </Stack>
                {error && <Text as="b" mt={4} color="red.500">{error}</Text>}
              </Box>
            </Box>
          </Box>
        </Stack>

        
      </>
    );
  };

  const Step3 = () => {

    return (
      <>
        <Stack align='center' mt={12}>
          {emotion && <Text mb={2} fontSize='2xl' as='b' mt={6}>Detected Emotion: {emotion}</Text>}
          {accent && <Text mb={2} fontSize='2xl' as='b' mt={6}>Detected Accent: {accent}</Text>}
          {laccent && <Text mb={2} fontSize='2xl' as='b' mt={6}>Detected Accent: {laccent}</Text>}
          {classificationText && <Box backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="30vh"
            p={10}
            maxW="775px"> <Text mt={-2} fontSize='xl' as='i' align="center">{classificationText}</Text></Box>}
          
          <HStack w={720} ml={64} mt={14} mb={-12} spacing={-12}>
            {selectedIcon !== "" && <ImageLoop margin={16} imageSources={classificationIMG} />}
            <Container maxW={350}>
              {varList && !loading && selectedIcon === 'AIden' && <EmotionBars emotions={varList} />}
              {varList && !loading && selectedIcon === 'Woofster' && <LanguageBars accents={varList} />}
              {varList && !loading && selectedIcon === 'Monstro' && <EnglishBars accents={varList} />}
            </Container>
          </HStack>
        </Stack>
          
        {emotion === 'Error' && accent === 'Error' && laccent === 'Error' &&<Text mt={4} color="red.500">Error analyzing voice.</Text>}
          <Stack align='center'>
            {varList && !loading && varList !== 'Error' && (
            <Button leftIcon={<FaCircleQuestion />} colorScheme='teal' size='lg' mt={112} align='center' isDisabled={loading} onClick={onOpen}>
                Was {selectedIcon} Right?
              </Button>
            )}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Was {selectedIcon} Right?</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                {/* Handle Yes and No button clicks */}
                <Link to="/step4">
                  {varList && !loading && varList !== 'Error' && (
                    <Button colorScheme='red' mr={3} onClick={() => {
                      setCorrect('no');
                      setEndingIMG(getEndingIMG(selectedIcon, 'no'));
                      setExplanationText(getExplanationText(selectedIcon, 'no'));
                      setExplanationText1(getExplanationText1(selectedIcon, 'no'));
                      handleModalClick(selectedIcon);
                      onClose();
                    }}>
                      No
                    </Button>
                  )}
                  {varList && !loading && varList !== 'Error' && (
                    <Button colorScheme='green' mr={3} onClick={() => {
                      setCorrect('yes');
                      setEndingIMG(getEndingIMG(selectedIcon, 'yes'));
                      setExplanationText(getExplanationText(selectedIcon, 'yes'));
                      setExplanationText1(getExplanationText1(selectedIcon, 'yes'));
                      handleModalClick(selectedIcon);
                      onClose();
                    }}>
                      Yes
                    </Button>
                  )}
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>

        </Stack>
      </>
    );
  };

  const Step4 = () => {
    return (
      <>
        {selectedExplanation1 != null && playOrStopAudio(selectedExplanation1)}
        <br />
        <Container maxW="container.lg">
          <Stack align='center' mt={6}>
            <Text fontSize="6xl" as='b' align='center' mb={28}>{endingTitle}</Text>
            <Box
            backgroundImage={speech}
            display="flex"
            backgroundSize="100% 100%"
            justifyContent="top"
            alignItems="top"
            h="19vh"
            p={12}><Text ml={4} mt={-2} fontSize="xl" align="center">{explanationText}</Text></Box>
            <br />
            <ImageLoop margin={12} imageSources={endingIMG} />
          </Stack>
        </Container>

        <Stack spacing={4} mt={14} align='center'>
          {correct && <Link to="/step4a">
            <Button variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedExplanation2)}>
              Next
            </Button>
          </Link>}
        </Stack>
      </>
    );
  };

  const Step4a = () => {

    return (
      <>
        <br />
        <Container maxW="container.lg">
          <Stack align='center' mt={4}>
            <Text fontSize="6xl" as='b' align='center' mb={4}>Why Does This Happen with AI?</Text>
            <Box
              backgroundImage={speech}
              display="flex"
              backgroundSize="100% 100%"
              justifyContent="top"
              alignItems="top"
              h="38vh"
              p={12}><Text ml={4} fontSize="xl" align="center">{explanationText1}</Text></Box>

            <br />
            {next && selectedIcon === "AIden" && <ImageLoop margin={-2} imageSources={[AIden, AIden2]} />}
            {next && selectedIcon === "Woofster" && <ImageLoop margin={-2} imageSources={[Woofster, Woofster2]} />}
            {next && selectedIcon === "Monstro" && <ImageLoop margin={-2} imageSources={[Monstro, Monstro2]} />}
          </Stack>
        </Container>

        <Stack spacing={4} mt={14} align='center'>
          {correct && <Link to="/step4b">
            <Button variant='ghost' rightIcon={<FaAngleRight />} size='lg' align='center' onClick={() => playOrStopAudio(selectedExplanation3)}>
              Next
            </Button>
          </Link>}
        </Stack>
      </>
    );
  };

  const Step4b = () => {

    return (
      <>
        <Container maxW="container.lg">
          <Stack align='center' mt={6}>
            <Text fontSize="6xl" as='b' align='center' mb={24}>Let's Try It Again!</Text>
            <Box
              backgroundImage={speech}
              display="flex"
              backgroundSize="100% 100%"
              justifyContent="top"
              alignItems="top"
              h="24vh"
              p={12}><Text ml={4} mt={-2} fontSize="xl" align="center">{explanationText2}</Text></Box>

            <br />
            {next && selectedIcon === "AIden" && <ImageLoop margin={12} imageSources={[AIden, AIden2]} />}
            {next && selectedIcon === "Woofster" && <ImageLoop margin={12} imageSources={[Woofster, Woofster2]} />}
            {next && selectedIcon === "Monstro" && <ImageLoop margin={12} imageSources={[Monstro, Monstro2]} />}
          </Stack>
        </Container>

        <Stack spacing={4} mt={14} align='center'>
          <Link to="/">
            <Button variant='outline' rightIcon={<VscDebugRestart />} size='lg' align='center' onClick={() => {
              audioRef.current.pause();
              setSelected('');
              setAudioURL('');
              setNarrationIntroText('');
              setAudioBlob(null);
              setEmotion('');
              setClassificationText('');
              setVarList('');
              setSelectedIcon(null);
              setNext(false);
              setCorrect('');
            }}>
              Start Over
            </Button>
          </Link>
        </Stack>
      </>
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box
        backgroundImage={background} // Replace with the path to your image file
        backgroundSize="cover" // Adjust as needed
        backgroundPosition="center"
        backgroundRepeat="no-repeat" 
        h="100vh" // Set the height of the container
        display="flex"
        flexDirection="column"
        alignItems="top"
        justifyContent="top"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/step1a" element={<Step1a />} />
            <Route path="/step1b" element={<Step1b />} />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
            <Route path="/step4a" element={<Step4a />} />
            <Route path="/step4b" element={<Step4b />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;