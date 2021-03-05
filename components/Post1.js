import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import GLOBALS from '../globals';
import PhoneDark from '../assets/icons/phone-dark.png';
import PhoneLight from '../assets/icons/phone-light.png';
import ChatDark from '../assets/icons/chat-dark.png';
import ChatLight from '../assets/icons/chat-light.png';
import SendDark from '../assets/icons/send-dark.png';
import SendLight from '../assets/icons/send-light.png';

export default function Post1(props) {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 15,
      borderBottomWidth: 1,
      paddingHorizontal: 20,
      backgroundColor: GLOBALS.Styles.white,
      borderBottomColor: GLOBALS.Styles.greyLight,
    },
    postContainer: {
      flexDirection: 'row',
    },
    avatarContainer: {
      width: 65,
      height: 65,
      marginRight: 10,
    },
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: 65,
      resizeMode: 'contain',
    },
    postContent: {
      flex: 1,
      paddingTop: 5,
    },
    postInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postAuthor: {
      fontSize: 22,
      opacity: 0.6,
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
    },
    postDot: {
      fontSize: 4,
      opacity: 0.6,
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
    },
    postTime: {
      fontSize: 16,
      opacity: 0.6,
      fontWeight: '600',
      fontFamily: 'Futura-Medium',
    },
    postText: {
      marginTop: 3,
      fontSize: 18,
      opacity: 0.8,
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
    },
    //
    reactions: {
      marginTop: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    reaction: {
      marginRight: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    reactionIcon: {
      width: 18,
      height: 18,
      resizeMode: 'contain',
    },
    reactionIconLarge: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
    reactionText: {
      marginLeft: 5,
      fontSize: 18,
      fontWeight: '500',
      fontFamily: 'Futura-Medium',
    },
    //
    actions: {
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    action: {
      marginRight: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    actionIconLarge: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
    },
    actionText: {
      fontSize: 18,
      opacity: 0.5,
      marginLeft: 5,
      fontWeight: '300',
      fontFamily: 'Futura-Medium',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.avatarContainer}>
          <Image source={props.avatar} style={styles.avatar} />
        </View>
        <View style={styles.postContent}>
          <View style={styles.postInfo}>
            <Text style={styles.postAuthor}>@{props.author} </Text>
            <Text style={styles.postDot}>{'\u2B24'}</Text>
            <Text style={styles.postTime}> {props.time} atra's</Text>
          </View>
          <View style={styles.postTextContainer}>
            <Text style={styles.postText}>{props.text}</Text>
          </View>
        </View>
      </View>
      <View style={styles.reactions}>
        <View style={styles.reaction}>
          <Image style={styles.reactionIconLarge} source={PhoneDark} />
          <Text style={styles.reactionText}>{props.likes}</Text>
        </View>
        <View style={styles.reaction}>
          <Image style={styles.reactionIcon} source={ChatDark} />
          <Text style={styles.reactionText}>{props.reactions}</Text>
        </View>
        <View style={styles.reaction}>
          <Image style={styles.reactionIcon} source={SendDark} />
          <Text style={styles.reactionText}>{props.shares}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.action}>
          <Image style={styles.actionIconLarge} source={PhoneLight} />
          <Text style={styles.actionText}>Destaque</Text>
        </View>
        <View style={styles.action}>
          <Image style={styles.actionIcon} source={SendLight} />
          <Text style={styles.actionText}>Compartilha</Text>
        </View>
        <View style={styles.reaction}>
          <Image style={styles.actionIcon} source={ChatLight} />
          <Text style={styles.actionText}>Comente</Text>
        </View>
      </View>
    </View>
  );
}
