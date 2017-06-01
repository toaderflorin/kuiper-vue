const fs = require('fs')
const outputFolder = `${__dirname}/../output`

const List = Vue.component('list', ({
  template:
  `
<div>
  <p>
    This is the <b>default</b> route in vue.
  </p>
  <div v-for="item in items">
    {{ item }}
  </div>
</div>
`,
  data: function () {
    const results = fs.readdirSync(outputFolder).map(f => {
      return {
        title: f.replace('.html', '')        
      }
    })

    return results
    // return {
    //   items: ['blabla', 'asdasd']
    // }
  }
}));