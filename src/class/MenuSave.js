import moment from 'moment'
import config from '../data/config'
import Box from './Box'
import Button from './Button'
import chapters from '../data/chapters'
import { slideIn } from '../util/animations'
export default class MenuSave extends Phaser.GameObjects.Container {
  constructor (scene, readOnly = false) {
    super(scene)
    this.scene = scene
    this.readOnly = readOnly
    const title = scene.add.text(20, 15, 'SAVE', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'セーブ', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    this.setItems()
    this.setContent(this.scene.storage.lastNumber || 0)
  }
  setItems () {
    const firstTime = !this.items
    if (!firstTime) this.items.forEach(v => v.destroy())
    const dataList = this.scene.storage.getList()
    this.items = dataList.map((data, i) => this.getItem(data, 165, i * 40 + 120))
    this.add(this.items)
    if (firstTime) slideIn(this.scene, this.items)
  }
  getItem (data, x, y) {
    const item = this.scene.add.container(x, y).setSize(240, 30).setInteractive().on('pointerdown', () => {
      this.setContent(data.number)
    })
    const bg = new Box(this.scene, 0, 0, 270, 32)
    item.add(bg)
    const tx = this.scene.add.text(-120, 0, data.name, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    item.add(tx)
    item.setActive = bool => tx.setFill(config.COLORS[bool ? 'theme' :'white'].toColorString)
    if (data.exists) {
      const timeString = moment(data.state.saved, 'X').format('YYYY-MM-DD HH:mm:ss')
      const time = this.scene.add.text(120, 0, timeString, { fontSize: 12, fontFamily: config.FONT, fill: config.COLORS.gray.toColorString }).setOrigin(1, 0.5)
      item.add(time)
    }
    return item
  }
  setContent (number, reload = false) {
    if (!reload && this.content && this.content.number === number) return
    const x = 380
    if (this.items) {
      this.items.forEach((v, i) => v.setActive(i === number))
    }
    if (this.content) this.scene.add.tween({ targets: this.content, duration: 250, ease: 'Power2', x: x + 100, alpha: 0, onComplete: this.content.destroy.bind(this.content) })
    const data = this.scene.storage.getRow(number)
    this.content = this.getContent(data, x - 100, 104).setAlpha(0)
    this.add(this.content)
    this.scene.add.tween({ targets: this.content, duration: 250, ease: 'Power2', x, alpha: 1 })
  }
  getContent (data, x, y) {
    const container = this.scene.add.container(x, y)
    container.number = data.number
    const tx = this.scene.add.text(0, 220, data.name, { fontSize: 20, fontStyle: 'bold', fontFamily: config.FONT })
    container.add(tx)
    const buttonWidth = 150
    if (data.number > 0 && !this.readOnly) {
      const save = new Button(this.scene, buttonWidth.half, 330, 'Save', buttonWidth, 40).on('click', () => {
        this.scene.storage.save(data.number)
        this.setItems()
        this.setContent(data.number, true)
      })
      container.add(save)
    }
    const thumb = this.scene.add.rectangle(0, 0, 360, 203, config.COLORS.black).setAlpha(0.7).setOrigin(0, 0)
    container.add(thumb)
    if (data.exists) {
      const chapter = chapters[data.state.chapter]
      const detail = this.scene.add.text(100, 220, `${chapter.name} ${chapter.title}`, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT })
      const timeString = moment(data.state.saved, 'X').format('YYYY-MM-DD HH:mm:ss')
      const date = this.scene.add.text(100, 243, timeString, { fontSize: 12, fontFamily: config.FONT, fill: config.COLORS.gray.toColorString })
      container.add([detail, date])
      const load = new Button(this.scene, buttonWidth.half + buttonWidth + 10, 331, 'Load', buttonWidth, 40).on('click', () => {
        this.emit('loadData', data)
      })
      container.add(load)
    }
    return container
  }
}
