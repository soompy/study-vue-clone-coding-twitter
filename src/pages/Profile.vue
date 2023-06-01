<template>
  <div class="flex-1 flex">
    <!-- 프로필 섹션 -->
    <div class="flex-1 flex flex-col border-r border-color">
      <!-- 타이틀 -->
      <div class="px-3 py-1 flex border-b border-color">
        <button class="mr-4">
          <i class="fas fa-arrow-left text-primary p-3 rounded-full hover:bg-blue-50"></i>
        </button>
        <div>
          <div class="font-extrabold text-lg">soomin.com</div>
          <div class="text-xs text-gray">100 트윗</div>
        </div>
      </div>
      <!-- 배경 이미지 -->
      <div class="bg-gray-300 h-40 relative flex-none">
        <!-- 프로필 이미지 -->
        <div
          class="border-4 border-white bg-gray-100 w-28 h-28 rounded-full absolute -bottom-14 ml-2"
        >
          <img
            src="https://picsum.photos/100"
            class="opacity-90 rounded-full cursor-pointer hover:opacity-10 m-auto"
          />
        </div>
      </div>
      <div class="text-right mt-2 mr-2">
        <button
          class="border border-primary text-sm text-primary px-4 py-1 hover:bg-blue-50 font-bold rounded-full"
        >
          프로필 수정
        </button>
      </div>
      <!-- 유저 정보 -->
      <div class="mx-3 mt-6">
        <strong class="font-extrabold text-lg">soomin.com</strong>
        <span class="text-gray">@suri</span>
        <div class="text-gray text-sm">
            <span class="mr-2"><i class="fas fa-regular fa-calendar mr-1"></i>가입일</span>
            <span>2011년 10월</span>
        </div>
        <div class="text-sm">
            <strong class="mr-2">28</strong><span class="text-gray">팔로우 중</span>
            <strong class="font-bold ml-3">7</strong><span class="text-gray">팔로워</span>
        </div>        
      </div>
      <!-- 탭 -->
      <div class="flex border-b border-color mt-3">
        <div class="py-3 text-primary font-bold border-b border-primary text-center w-1/4 cursor-pointer hover:bg-blue-50">
            트윗
        </div>
        <div class="py-3 text-gray border-b border-gray text-center w-1/4 cursor-pointer hover:bg-blue-50">
            트윗
        </div>
        <div class="py-3 text-gray border-b border-gray text-center w-1/4 cursor-pointer hover:bg-blue-50">
            트윗
        </div>
        <div class="py-3 text-gray border-b border-gray text-center w-1/4 cursor-pointer hover:bg-blue-50">
            트윗
        </div>
      </div>
      <!-- 트윗 -->
      <div class="overflow-y-auto">
        <tweet v-for="tweet in 10" :key="tweet"></tweet>
      </div>      
    </div>
    <!-- 트렌드 섹션 -->
    <trends></trends>
  </div>
</template>

<script>
import Trends from "../components/Trends.vue";
import Tweet from '../components/Tweet.vue';

export default {
  components: { Trends, Tweet },
};
</script>

<style></style>
