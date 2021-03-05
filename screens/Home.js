import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import GLOBALS from '../globals';
import Post1 from '../components/Post1';
import Post2 from '../components/Post2';
import Avatar from '../assets/avatar.png';

export default function Home(props) {
  const [posts] = React.useState([
    {
      imageType: false,
      author: 'GabrielBussolo',
      time: '15 min',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      likes: '3.5K',
      reactions: '854',
      shares: '1.8K',
      avatar: Avatar,
    },
    {
      imageType: true,
      author: 'PauloRomanenghi',
      time: '2 dias',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      image: Avatar,
      likes: '10K',
      reactions: '734',
      shares: '8,1M',
      avatar: Avatar,
    },
    {
      imageType: false,
      author: 'GabrielBussolo',
      time: '4 horas',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      likes: '3.5K',
      reactions: '854',
      shares: '1.8K',
      avatar: Avatar,
    },
    {
      imageType: true,
      author: 'PauloRomanenghi',
      time: '2 dias',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      image: Avatar,
      likes: '10K',
      reactions: '734',
      shares: '8,1M',
      avatar: Avatar,
    },
    {
      imageType: false,
      author: 'GabrielBussolo',
      time: '4 horas',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      likes: '3.5K',
      reactions: '854',
      shares: '1.8K',
      avatar: Avatar,
    },
    {
      imageType: true,
      author: 'PauloRomanenghi',
      time: '2 dias',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      image: Avatar,
      likes: '10K',
      reactions: '734',
      shares: '8,1M',
      avatar: Avatar,
    },
    {
      imageType: false,
      author: 'GabrielBussolo',
      time: '4 horas',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      likes: '3.5K',
      reactions: '854',
      shares: '1.8K',
      avatar: Avatar,
    },
    {
      imageType: true,
      author: 'PauloRomanenghi',
      time: '2 dias',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      image: Avatar,
      likes: '10K',
      reactions: '734',
      shares: '8,1M',
      avatar: Avatar,
    },
    {
      imageType: false,
      author: 'GabrielBussolo',
      time: '4 horas',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      likes: '3.5K',
      reactions: '854',
      shares: '1.8K',
      avatar: Avatar,
    },
    {
      imageType: true,
      author: 'PauloRomanenghi',
      time: '2 dias',
      text:
        'Hoje e o grande dia da lancamento Da nasse rede social, estou esperando muito par esse dia, nao veja a hora de poder falar para todos',
      image: Avatar,
      likes: '10K',
      reactions: '734',
      shares: '8,1M',
      avatar: Avatar,
    },
  ]);

  return (
    <FlatList
      data={posts}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => String(index)}
      renderItem={({ item }) =>
        item.imageType ? <Post2 {...item} /> : <Post1 {...item} />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: GLOBALS.Styles.backgroundColor,
  },
});
