import { jack } from '../event/dario'
export default {
  name: '聖アンテルスの墓地 - 西区画',
  enemyLevel: 19,
  enemyGroups: [
    ['ghost', 'ghost'],
    ['skull', 'ghost', 'skull'],
    ['spectre'],
    ['spectre', 'spectre']
  ],
  create (scene) {
    const jk = scene.map.getObjectById(2)
    const area1 = scene.map.getObjectById(3)
    const area2 = scene.map.getObjectById(4)
    const area3 = scene.map.getObjectById(7)
    jack(scene, jk, area1, area2, area3)
  }
}
