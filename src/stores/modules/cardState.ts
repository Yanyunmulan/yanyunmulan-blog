import { defineStore } from 'pinia'
import { ref } from 'vue'


// 导出使用 CardStore 存储的 useCardStore 函数
export const useCardStore = defineStore('cards', () => {

    // 定义一个选中的 ref
    const selected = ref(null)
    // 定义一个未选中的 ref
    const unselect = ref(null)

    // 选择卡牌函数
    function selectCard(selectedv) {
        // 设置未选中的值
        unselect.value = null
        // 设置选中的值
        selected.value = selectedv
    }
    // 取消选中卡牌函数
    function unselectCard () {
        // 设置未选中的值
        unselect.value = selected.value
        // unselect.value = null

        // 设置选中的值
        selected.value = null
      }

      // 返回一个对象，包含选中的 ref、未选中的 ref、选择卡牌函数和取消选中卡牌函数
      return {
        selected,
        unselect,
        selectCard,
        unselectCard
      }

  })