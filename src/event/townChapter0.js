import { annabelle } from './townCommon'
export default (scene, chara) => {
  const eState = scene.storage.state.event.m0
  chara.amber.on('tap', async chara => {
    if (!eState.talked_amber) {
      scene.talk([
        { chara, text: 'はじめまして、旅人さん。' },
        { chara, text: 'こちらへは何をしにいらしたのかしら？' },
        { chara: 'ann', text: 'ええと、王城を見に来ました！' },
        { chara, text: 'あら、そうなのね？' },
        { chara, text: 'とっても立派よ。' },
        { chara: 'ann', text: 'よく行かれるんですか？' },
        { chara, text: 'ええ、だって私の夫が王家と仲がいいんだもの。' },
        { chara: 'ann', text: 'すごいですね！' },
        { chara: 'ann', text: 'ええとじゃあ、裏庭とかにも行ったことあったり？' },
        { chara, text: 'そんなの行かないわよ。おもてから堂々と入れるもの。' },
        { chara, text: 'だって仲がいいですから。' },
        { chara: 'ann', text: 'そ、そうですか。' },
        { chara, text: 'あなた行きたいの？' },
        { chara, text: '裏庭って言っても、外周は深い森だから道を知ってないと行けないわよ。' },
        { chara: 'ann', text: 'そうなんですね、ありがとうございます。' }
      ])
      eState.talked_amber = true
    } else {
      scene.talk([
        { chara, text: '裏庭って言っても、外周は深い森だから道を知ってないと行けないわよ。' },
        { chara: 'ann', text: 'そうなんですね。' }
      ])
    }
  })
  chara.matilda.on('tap', async chara => {
    if (!eState.talked_matilda) {
      scene.talk([
        { chara: 'ann', text: 'こんにちは。' },
        { chara, text: 'あ、はい…。' },
        { chara: 'ann', text: '私たち、王城の裏庭を見てみたいんだけど、行き方知ってるかな？' },
        { chara, text: 'え、裏庭？' },
        { chara, text: '私はあんまり外で遊ばないから分からないな…。' },
        { chara, text: 'ごめんね。' },
        { chara: 'ann', text: 'そっかぁ…。' },
        { chara, text: 'あ、もしかしたら、宿屋のアナベルなら…、' },
        { chara: 'ann', text: 'え、分かりそう！？' },
        { chara, text: 'うん…。' },
        { chara, text: 'ほら、すぐそこにいる女の子。' },
        { chara: 'ann', text: 'ありがとう！' },
        { chara, text: 'あ、でも、待って…、' },
        { chara, text: 'お城の裏庭って、どうして…？' },
        { chara, text: '悪いことするわけじゃないよね…？' },
        { chara: 'jaquelyn', text: '違うわよ、安心してね。' },
        { chara: 'jaquelyn', text: '私たち、旅の途中で寄ったんだけれど、' },
        { chara: 'jaquelyn', text: '王城の裏庭がとっても綺麗だと聞いたから、ぜひ見てみたいと思って、ね。' },
        { chara, text: 'そうなんだ…、' },
        { chara, text: 'そんな噂聞いたことないけれど…、お城のそばなら、きっとそうかもしれないね。' }
      ])
      eState.talked_matilda = true
    } else {
      scene.talk([
        { chara, text: 'アナベル、今日も綺麗でいいなぁ…。' }
      ])
    }
  })
  chara.annabelle.on('tap', async chara => {
    if (!eState.talked_matilda) return annabelle(scene, chara)
    if (!eState.talked_annabelle) {
      await scene.talk([
        { chara, text: '王城の裏庭？' },
        { chara, text: 'あるよ、行ったこと。' },
        { chara: 'ann', text: 'ほんと！？' },
        { chara, text: 'うん、たまにだけど食料品のやりとりをするからね。' },
        { chara, text: '輸送中に襲われるのを防ぐために、人目につかないルートを通るの。' },
        { chara: 'ann', text: 'あの、道のりを教えてもらうことってできたり？' },
        { chara, text: 'いいよ。' },
        { chara: 'ann', text: 'いいの！？' },
        { chara, text: '別に問題なさそうだし。' },
        { chara, text: 'その代わり、今度うちの宿に泊まりに来てね。' },
        { chara: 'ann', text: 'ありがとうー！' }
      ])
      eState.talked_annabelle = true
      scene.storage.state.allowed_map = Math.max(scene.storage.state.allowed_map, 1)
      scene.ui.announce('マップ「王城 - 裏庭」が解放された')
    } else {
      scene.talk([
        { chara, text: '今度うちの宿に泊まりに来てね。' }
      ])
    }
  })
}