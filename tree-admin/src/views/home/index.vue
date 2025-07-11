<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <div id="wrapper">
      <h1 class="title">skyend&nbsp;-&nbsp;tree</h1>
      <h2 class="tips">Code, Fitness &amp; Things in Between&nbsp;</h2>
      <p class="link">
        <a href="http://skyend.top" target="_blank">Blog</a>
      </p>
      <p class="link">
        <a href="https://github.com/FE-tree" target="_blank">Github</a>
      </p>
      <p class="link">
        <a href="https://juejin.im/user/592a5cfba22b9d0057455c32/posts" target="_blank">掘金</a>
      </p>
      <p class="link">
        <a href="https://www.jianshu.com/u/667b88438385" target="_blank">简书</a>
      </p>
      <p class="link">
        <a href="https://www.zhihu.com/people/tree-xie" target="_blank">知乎</a>
      </p>
      <p class="link">
        <a href="https://weibo.com/skyendTree" target="_blank">微博</a>
      </p>
    </div>
    <canvas id="homeCanvas" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    document.addEventListener('touchmove', function(e) {
      e.preventDefault()
    })
    // var c = document.getElementsByTagName('canvas')[0]
    var c = document.getElementById('homeCanvas')
    var x = c.getContext('2d')
    var pr = window.devicePixelRatio || 1
    var w = window.innerWidth
    var h = window.innerHeight
    var f = 90
    var q
    var m = Math
    var r = 0
    var u = m.PI * 2
    var v = m.cos
    var z = m.random
    c.width = w * pr
    c.height = h * pr
    x.scale(pr, pr)
    x.globalAlpha = 0.6

    function i() {
      x.clearRect(0, 0, w, h)
      q = [
        { x: 0, y: h * 0.7 + f },
        { x: 0, y: h * 0.7 - f }
      ]
      while (q[1].x < w + f) d(q[0], q[1])
    }

    function d(i, j) {
      x.beginPath()
      x.moveTo(i.x, i.y)
      x.lineTo(j.x, j.y)
      var k = j.x + (z() * 2 - 0.25) * f
      var n = y(j.y)
      x.lineTo(k, n)
      x.closePath()
      r -= u / -50
      x.fillStyle =
        '#' +
        (
          ((v(r) * 127 + 128) << 16) |
          ((v(r + u / 3) * 127 + 128) << 8) |
          (v(r + (u / 3) * 2) * 127 + 128)
        ).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = { x: k, y: n }
    }

    function y(p) {
      var t = p + (z() * 2 - 1.1) * f
      return t > h || t < 0 ? y(p) : t
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      document.ontouchstart = i
    } else {
      document.onclick = i
    }

    i()

    function cl() {
      return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    }
    document.getElementsByTagName('h1')[0].style.color = cl()

    // 随机线条
    window.onload = function() {
      !(function() {
        // 封装方法，压缩之后减少文件大小
        function get_attribute(node, attr, default_value) {
          return node.getAttribute(attr) || default_value
        }
        // 封装方法，压缩之后减少文件大小
        function get_by_tagname(name) {
          return document.getElementsByTagName(name)
        }
        // 获取配置参数
        function get_config_option() {
          var scripts = get_by_tagname('script')
          var script_len = scripts.length
          var script = scripts[script_len - 1] // 当前加载的script
          return {
            l: script_len, // 长度，用于生成id用
            z: get_attribute(script, 'zIndex', -1), // 层级
            o: get_attribute(script, 'opacity', 0.5), // 透明度
            c: get_attribute(script, 'color', '0,0,0'), // 线条颜色，最好使用RGB颜色
            n: get_attribute(script, 'count', 99) // 线条数量
          }
        }
        // 设置canvas的高宽
        function set_canvas_size() {
          canvas_width = the_canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          canvas_height = the_canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }

        // 绘制过程
        function draw_canvas() {
          context.clearRect(0, 0, canvas_width, canvas_height)
          // 随机的线条和当前位置联合数组
          var all_array = [current_point].concat(random_lines)
          var e, i, d, x_dist, y_dist, dist // 临时节点
          // 遍历处理每一个点
          random_lines.forEach(function(r) {
            // eslint-disable-next-line no-sequences
            (r.x += r.xa),
            (r.y += r.ya), // 移动
            (r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1),
            (r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1), // 碰到边界，反向反弹
            context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1) // 绘制一个宽高为1的点
            for (i = 0; i < all_array.length; i++) {
              e = all_array[i]
              // 不是当前点
              if (r !== e && e.x !== null && e.y !== null) {
                // eslint-disable-next-line no-sequences
                (x_dist = r.x - e.x), // x轴距离 l
                (y_dist = r.y - e.y), // y轴距离 n
                (dist = x_dist * x_dist + y_dist * y_dist) // 总距离, m
                dist < e.max &&
                  (e === current_point &&
                    dist >= e.max / 2 &&
                    ((r.x -= 0.03 * x_dist), (r.y -= 0.03 * y_dist)), // 靠近的时候加速
                  (d = (e.max - dist) / e.max),
                  context.beginPath(),
                  (context.lineWidth = d / 2),
                  (context.strokeStyle =
                    'rgba(' + config.c + ',' + (d + 0.2) + ')'),
                  context.moveTo(r.x, r.y),
                  context.lineTo(e.x, e.y),
                  context.stroke())
              }
            }
            all_array.splice(all_array.indexOf(r), 1)
          })
          frame_func(draw_canvas)
        }
        // 创建画布，并添加到body中
        var the_canvas = document.createElement('canvas') // 画布
        var config = get_config_option() // 配置
        var canvas_id = 'c_n' + config.l // canvas id
        var context = the_canvas.getContext('2d')
        var canvas_width
        var canvas_height
        var frame_func =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(func) {
              window.setTimeout(func, 1000 / 45)
            }
        var random = Math.random
        var current_point = {
          x: null, // 当前鼠标x
          y: null, // 当前鼠标y
          max: 20000
        }
        the_canvas.id = canvas_id
        the_canvas.style.cssText =
          'position:fixed;top:0;left:0;z-index:' +
          config.z +
          ';opacity:' +
          config.o
        get_by_tagname('body')[0].appendChild(the_canvas)
        // 初始化画布大小

        // eslint-disable-next-line no-sequences
        set_canvas_size(), (window.onresize = set_canvas_size)
        // 当时鼠标位置存储，离开的时候，释放当前位置信息
        ;(window.onmousemove = function(e) {
          // eslint-disable-next-line no-sequences
          (e = e || window.event),
          (current_point.x = e.clientX),
          (current_point.y = e.clientY)
        // eslint-disable-next-line no-sequences
        }),
        (window.onmouseout = function() {
          // eslint-disable-next-line no-sequences
          (current_point.x = null), (current_point.y = null)
        })
        // 随机生成config.n条线位置信息
        for (var random_lines = [], i = 0; config.n > i; i++) {
          var x = random() * canvas_width // 随机位置
          var y = random() * canvas_height
          var xa = 2 * random() - 1 // 随机运动方向
          var ya = 2 * random() - 1
          random_lines.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000 // 沾附距离
          })
        }
        // 0.1秒后绘制
        setTimeout(function() {
          draw_canvas()
        }, 100)
      })()
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
#wrapper {
  position: absolute;
  left: 0;
  width: 320px;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.title {
  font-family: 'unset', 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-size: 30px;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin: 12px 0;
  left: 4px;
}

.tips {
  color: #999;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.12em;
  margin-bottom: 30px;
  left: 3px;
}

.title,
.tips {
  position: relative;
}

.link {
  font-size: 14px;
  line-height: 2em;
  margin: 0;
  letter-spacing: 2px;
  a {
    color: #999;
    text-decoration: none;
    transition: color 0.2s ease;
    &:hover {
      color: #f33;
    }
  }
}

#homeCanvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
