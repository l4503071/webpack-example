# web开发网络优化
1. 合并资源文件，减少http请求次数
2. 压缩资源文件，减少http请求大小
3. 利用缓存机制，减少http请求次数

# node包删除文件
[rimraf](https://github.com/isaacs/rimraf#readme)

#### 问题记录
1. export default 出去的代码，在node中使用require加载，需要使用require('').default加载进来
