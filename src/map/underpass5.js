import { dionysus } from '../event/moonshine'
import { wine } from '../event/cassandra'
export default {
  name: 'トロイア公爵邸の地下通路 - 貯蔵庫',
  enemyLevel: 11,
  enemyGroups: [
    ['goblin', 'goblin'],
    ['carbuncle', 'carbuncle'],
    ['gargoyle', 'gargoyle'],
    ['succubus']
  ],
  create (scene) {
    dionysus(scene, scene.map.getObjectById(3), scene.map.getObjectById(4), scene.map.getObjectById(2))
    wine(scene, scene.map.getObjectById(5), 2)
    wine(scene, scene.map.getObjectById(8), 3)
    const btn = scene.map.getObjectById(9)
    if (scene.storage.state.gimmicks.includes('unserpass4_9')) {
      this.openNeedle(scene, false)
      btn.destroy()
    } else {
      btn.setEvent(async () => {
        scene.storage.state.gimmicks.push('unserpass4_9')
        await this.openNeedle(scene, true)
        btn.destroy()
      })
    }
  },
  async openNeedle (scene, event) {
    const layer4 = scene.map.getLayerByName('layer4')
    layer4.layer.data[9][41].index = 20
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.look(0, 320, 1000)
    if (event) await scene.ui.sleep(100)
    Array(40, 41, 42).forEach(x => {
      layer4.layer.data[22][x].index = 79
      layer4.layer.data[22][x].setCollision(false)
    })
    if (event) await scene.ui.sleep(500)
    if (event) await scene.camera.look(0, -320, 1000)
  }
}
