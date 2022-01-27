import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

// require.context(directory,useSubdirectories,regExp) directory表示检索的目录 useSubdirectories是否检索子文件夹 regExp匹配文件的正则表达式,一般是文件名
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
console.log(requireAll(req))
