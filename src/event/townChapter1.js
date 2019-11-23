export default (scene, chara) => {
  const eState = scene.storage.state.event.m1
  chara.amber.on('tap', async chara => {
    if (!eState.talked_sick) {
      await scene.talk([
        { chara: 'ann', text: 'こんにちは、お兄さん。' },
        { chara, text: 'やあ。何か用かい？お姉さんたち。' },
        { chara: 'ann', text: '国王の病気について聞いてもいいですか？' },
        { chara, text: '君たちよそから来たのかい？' },
        { chara, text: '国王は知っての通り病気だ。ある日突然病を患ったんだ。' },
        { chara, text: '混乱を避けるためか、あまり表沙汰にしていないみたいだけど、かなり状態が良くないらしい。' },
        { chara: 'jaquelyn', text: '治らないんですか？' },
        { chara, text: 'どんな病気かは知らないが、ドリスタンという森の賢人なら大抵の病を治せる。' },
        { chara, text: '今回も彼を頼っているはずだが、何故だか難航しているようだ。' },
        { chara: 'ann', text: 'そうなんですね。ありがとうございました。' }
      ])
      eState.talked_sick = true
      scene.storage.state.allowed_map = Math.max(scene.storage.state.allowed_map, 2)
      scene.ui.announce('マップ「ワルコフォレンスの森」が解放された')
    } else {
      scene.talk([
        { chara, text: 'ワン！' }
      ])
    }
  })
}