<template>
  <div class="content">
    <ul>
      <li>haha1</li>
      <li>haha2</li>
      <li>haha3</li>
      <li>haha4</li>
      <li>haha5</li>
      <li>haha6</li>
      <li>haha7</li>
      <li>haha8</li>
      <li>haha9</li>
      <li>haha10</li>
      <li>haha11</li>
      <li>haha12</li>
      <li>haha13</li>
      <li>haha14</li>
      <li>haha15</li>
      <li>haha16</li>
      <li>haha17</li>
      <li>haha18</li>
      <li>haha19</li>
      <li>haha20</li>
      <li>haha21</li>
      <li>haha22</li>
      <li>haha23</li>
      <li>haha24</li>
      <li>haha25</li>
      <li>haha26</li>
      <li>haha27</li>
      <li>haha28</li>
      <li>haha29</li>
      <li>haha30</li>
      <li>haha31</li>
      <li>haha32</li>
      <li>haha33</li>
      <li>haha34</li>
      <li>haha35</li>
      <li>haha36</li>
      <li>haha37</li>
      <li>haha38</li>
      <li>haha39</li>
      <li>haha40</li>
      <li>haha41</li>
      <li>haha42</li>
      <li>haha43</li>
      <li>haha44</li>
      <li>haha45</li>
      <li>haha46</li>
      <li>haha47</li>
      <li>haha48</li>
      <li>haha49</li>
      <li>haha50</li>
      <li>haha51</li>
      <li>haha52</li>
      <li>haha53</li>
      <li>haha54</li>
      <li>haha55</li>
      <li>haha56</li>
      <li>haha57</li>
      <li>haha58</li>
      <li>haha59</li>
      <li>haha60</li>
      <li>haha61</li>
      <li>haha62</li>
      <li>haha63</li>
      <li>haha64</li>
      <li>haha65</li>
      <li>haha66</li>
      <li>haha67</li>
      <li>haha68</li>
      <li>haha69</li>
      <li>haha70</li>
      <li>haha71</li>
      <li>haha72</li>
      <li>haha73</li>
      <li>haha74</li>
      <li>haha75</li>
      <li>haha76</li>
      <li>haha77</li>
      <li>haha78</li>
      <li>haha79</li>
      <li>haha80</li>
      <li>haha81</li>
      <li>haha82</li>
      <li>haha83</li>
      <li>haha84</li>
      <li>haha85</li>
      <li>haha86</li>
      <li>haha87</li>
      <li>haha88</li>
      <li>haha89</li>
      <li>haha90</li>
      <li>haha91</li>
      <li>haha92</li>
      <li>haha93</li>
      <li>haha94</li>
      <li>haha95</li>
      <li>haha96</li>
      <li>haha97</li>
      <li>haha8</li>
      <li>haha99</li>
      <li>haha100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
// 加载下一页
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".content"), {
      probeType: 3,
      // 上拉加载更多
      pullUpLoad: true,
      // BetterScroll 默认会阻止浏览器的原生 click 事件，如果不阻止，需要给这个属性值设置为 true
      click: true,
    });
    // 可以实时监听当前滚到什么位置，但必设置 probeType 值
    // 传入值为 0、1 时不侦测实时位置 传入值为 2 时惯性后面的不侦测 传入值为 3 时 惯性后面的页侦测
    this.scroll.on("scroll", (position) => {
      // console.log(position)
    });
    // 监听上拉加载更多， 但必须设置 pullUpLoad 值
    this.scroll.on("pullingUp", () => {
      console.log("加载下一页");
      //  监听多次上拉加载更多，默认只监听一次
      this.scroll.finishPullUp();
    });
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 150px;
  background-color: #42b983;
  overflow: hidden;
}
</style>
