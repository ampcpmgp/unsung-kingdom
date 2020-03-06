import { evangelina } from '../event/evangelina'
export default {
  name: '聖アンテルスの墓地 - 王家の墓',
  enemyLevel: 23,
  enemyGroups: [
    ['skull', 'spectre', 'skull'],
    ['spectre', 'spectre'],
    ['wraith', 'spectre'],
    ['wraith', 'wraith'],
    ['dullahan'],
    ['dullahan', 'dullahan']
  ],
  create (scene) {
    const queen = scene.map.getObjectById(3)
    const queen2 = scene.map.getObjectById(4)
    const grave = scene.map.getObjectById(6)
    evangelina(scene, queen, queen2, grave)
  }
}
