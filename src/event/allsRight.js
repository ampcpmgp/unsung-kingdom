export const KELUNNE_COUNT = 5

export const allsRight = (scene, zi) => {
  const state = scene.storage.state.event.m4_2
  zi.setDisplayName(t('chara.zi'))
  zi.setTapEvent(async chara => {
    if (scene.storage.state.event.m4_3.completed) {
      await scene.talk([
        { chara, text: 'すべて世はこともなし。' },
        { chara, text: 'この通り私はここで、なんのこともなく、ただ平穏に過ごしている。' }
      ])
    } else if (state.completed) {
      await scene.talk([
        { chara, text: '聖剣の近くで、言葉の煙の瓶の栓を抜け。' },
        { chara, text: '私の言葉がニッケに届くはずだ。' }
      ])
    } else if (state.count >= KELUNNE_COUNT) {
      await scene.talk([
        { chara: 'ann', text: '集めてきたよ！' },
        { chara, text: 'よし、確かに。' },
        { chara, text: 'ちょっと待っていてくれ。' }
      ])
      await scene.ui.transition('slow')
      await scene.ui.sleep(1500)
      await scene.talk([
        { chara, text: 'できた。' },
        { chara: 'ann', text: 'これは…？瓶？' },
        { chara, text: '瓶に言葉の煙を詰めた。' },
        { chara: 'ann', text: 'え、よく分かんない。' },
        { chara: 'ann', text: '言葉の煙って？' },
        { chara, text: '竜族の言葉は煙に込めることができる。' },
        { chara: 'ann', text: 'すごい、ほんとに…？' },
        { chara, text: '聖剣の近くで、この瓶の栓を抜け。' },
        { chara, text: '私の言葉がニッケに届くはずだ。' },
        { chara: 'ann', text: '分かった、ありがとう！' }
      ])
      state.completed = true
      scene.storage.state.event.m4_3.started = true
      scene.ui.missionUpdate('m4_2', true).then(() => {
        scene.ui.missionUpdate('m4_3')
      })
    } else if (state.started) {
      await scene.talk([
        { chara, text: `ケルーネの羽根を${KELUNNE_COUNT}枚、集めてきてくれ。` },
        { chara, text: 'それを使って伝言を作る。' }
      ])
    } else {
      await scene.talk([
        { chara, text: 'ん？' },
        { chara, text: 'ここへの扉は閉まっていたはずだが…、' },
        { chara: 'ann', text: 'え！ドラゴン！？' },
        { chara, text: '竜に会うのは初めてか？' },
        { chara: 'ann', text: 'う、うん。' },
        { chara: 'ann', text: 'びっくりした。' },
        { chara, text: '私は竜族のズィ。' },
        { chara, text: '驚かせてしまったのなら申し訳ない。' },
        { chara: 'ann', text: 'この国に竜族が居るなんて。' },
        { chara, text: 'この通り、居る。' },
        { chara, text: '遠い昔のこと、この地では竜族と人間が共存していた。' },
        { chara, text: '二つの種族の間で戦争が起き、破れた竜族はこの地を去った。' },
        { chara, text: 'よくある話だ。' },
        { chara, text: 'だが、わずかだが私のようにこの地に残った者もいる。' },
        { chara: 'ann', text: 'なるほど。' },
        { chara: 'ann', text: 'あなたはどうしてここに残ったの？' },
        { chara, text: 'この地の神を信仰しているからだ。' },
        { chara, text: '神は竜も人も区別せず、' },
        { chara, text: '私のことも平等に見守っておられる。' },
        { chara, text: 'この通り私はここで、なんのこともなく、ただ平穏に過ごしている。' },
        { chara: 'ann', text: 'そうなんだ。' },
        { chara: 'ann', text: '他に残った竜族も、人の居ないところで暮らしているの？' },
        { chara, text: '多くはそうだ。' },
        { chara, text: 'この地に残った竜族の多くは人里離れて静かに暮らしているが、' },
        { chara, text: 'そうでないものもいる。' },
        { chara, text: '例えばお前たちがこの地下に封じたソンベルクという竜だ。' },
        { chara, text: 'お前たちもやつを倒しに来たんだろう？' },
        { chara: 'ann', text: 'ええと、まあ、はい。' },
        { chara, text: '私に気を遣う必要はない。' },
        { chara, text: 'やつは我々から見ても単なる荒くれ者。' },
        { chara, text: 'お前たちがやつを殺そうとなんとも思わん。' },
        { chara, text: 'しかし、ソンベルクは大型の竜。' },
        { chara, text: 'お前たちが勝てる望みは薄いだろう。' },
        { chara: 'ann', text: '昔の人間はどうやってドラゴンに勝ったんですか？' },
        { chara, text: '簡単に言えば「技術」だ。' },
        { chara, text: '人間は特別な武器や道具を作って竜との力の差縮めた。' },
        { chara, text: '例を挙げるなら、この神殿に封じられている聖剣カリブルヌスがその一つだ。' },
        { chara, text: 'あの剣は紛れもなく我々にとって脅威だ。' },
        { chara: 'ann', text: '聖剣カリブルヌス…、' },
        { chara: 'ann', text: 'その剣があれがあればソンベルクを倒せる？' },
        { chara, text: '望みはあるだろう。' },
        { chara: 'ann', text: '王たちは知らないのかな、その剣のこと。' },
        { chara, text: '知っているはずだ。' },
        { chara, text: 'だがあの剣は竜族のニッケが封じている。' },
        { chara, text: '持ち出すことは叶わない。' },
        { chara: 'ann', text: 'そうなんだ。' },
        { chara: 'ann', text: 'それって何とかならない？' },
        { chara: 'ann', text: 'そのニッケにお願いして、貸してもらえないかな。' },
        { chara, text: 'すまない。' },
        { chara, text: 'お前たちがソンベルクを殺そうと気にしないとは言ったが、' },
        { chara, text: '積極的に手を貸すつもりでもない。' },
        { chara: 'ann', text: 'そっか…。' },
        { chara: 'ann', text: '困ったな…。' },
        { chara, text: '…。' },
        { chara, text: 'ニッケと話す機会くらいはつくろう。' },
        { chara: 'ann', text: '話す機会？' },
        { chara, text: 'ニッケは普段姿を消している。' },
        { chara, text: '人間が呼びかけても応じないだろう。' },
        { chara, text: '私から伝言を預けるとしよう。' },
        { chara: 'ann', text: '助かる！' },
        { chara, text: '少し準備が必要だ。' },
        { chara: 'ann', text: '準備？' },
        { chara, text: `ケルーネの羽根を${KELUNNE_COUNT}枚、集めてきてくれ。` },
        { chara, text: 'それを使って伝言を作る。' },
        { chara: 'ann', text: '伝言を作る…？' },
        { chara: 'ann', text: 'よく分からないけど分かった！集めてくるね。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m4_2')
    }
  })
}
