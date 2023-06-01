<template>
  <div class="flex-1 flex">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray-100 overflow-y-scroll">
      <div class="flex flex-col">
        <div class="p-3 font-bold text-lg border-b border-gray-100 h-14">
            쪽지
        </div>
        <!-- 채팅 목록 -->
        <div
          class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray-100 bg-gray-200 text-sm">
          <img
            src="https://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
          <div class="mx-2">
            <div class="flex space-x-1">
              <div class="font-bold">soomin.com</div>
              <div class="text-gray-500">@suri</div>
              <div class="text-gray-500">6월 1일</div>
            </div>
            <div class="text-gray-500">메세지</div>
          </div>
        </div>
        <!-- 채팅 목록 -->
        <div
          class="flex px-3 py-4 hover:bg-gray-50 border-b border-gray text-sm"
          v-for="message in 10"
          :key="message"
        >
          <img
            src="https://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
          />
          <div class="mx-2">
            <div class="flex space-x-1">
              <div class="font-bold">soomin.com</div>
              <div class="text-gray-500">@suri</div>
              <div class="text-gray-500">6월 1일</div>
            </div>
            <div class="text-gray-500">메세지</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 채팅 창 -->
    <div class="w-3/5 border-r border-gray-100">
        <div class="flex flex-col h-screen">
            <!-- 타이틀 -->
            <div class="flex items-center px-3 h-14 border-b border-gray-100">
                <img src="https://picsum.photos/100" class="w-8 h-8 rounded-full mr-2 cursor-pointer hover:opacity-80" />
                <div>
                    <div class="font-bold text-lg">soomin.com</div>
                    <div class="text-sm text-gray-500">@suri</div>
                </div>
            </div>
            <!-- 유저 정보 -->
            <div class="flex flex-col justify-center items-center text-sm border-b border-gray-100 hover:bg-gray-50 py-6">
                <div>
                    <strong class="">soomin.com</strong>
                    <span class="text-gray-500">@suri</span>
                </div>
                <div>
                    <strong class="mr-1">28</strong><span class="text-gray-500">팔로우 중</span>
                    <strong class="font-bold ml-3">7</strong><span class="text-gray-500">팔로워</span>
                </div>
                <div class="text-gray-500">
                    <span class="mr-1"><i class="fas fa-regular fa-calendar"></i>가입일</span>
                    <span>2011년 10월</span>
                </div>
            </div>
            
            <div class="flex-1 overflow-y-auto">
                <!-- 채팅 번들 : 나의 대화 -->
                <div class="text-right px-3 py-3">
                    <span class="bg-primary text-white px-4 py-2 text-lg rounded-full">talk talk talk</span>
                    <div class="mt-3 text-xs text-gray-500">2023년 6월 1일 오후 14:00</div>
                </div>
                <!-- 채팅 번들 : 상대 대화 -->
                <div class="text-left px-3 py-3" v-for="chat in 25" :key="chat">
                    <span class="bg-gray-100 px-4 py-2 text-lg rounded-full">talk talk talk</span>
                    <div class="mt-3 text-xs text-gray-500">2023년 6월 1일 오후 14:00</div>
                </div>
            </div>            
            <!-- 채팅 입력 -->
            <div class="flex items-center bg-white border-t border-gray-100 sticky">
                <input type="text" class="m-2 py-1 px-4 rounded-full bg-gray-100 resize-none outline-none flex-1" placeholder="새 쪽지 작성하기">
                <button class="text-center">
                    <i class="far fa-paper-plane text-primary text-lg hover:bg-blue-50 p-2 rounded-full w-10 h-10"></i>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
