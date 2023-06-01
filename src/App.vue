<template>
    <div class="flex h-screen container mx-auto">
        <!-- 사이드 섹션 -->
        <div class="w-20 xl:w-1/4 pt-5 xl:ml-10 flex flex-col justify-between border-r border-gray-200">
            <div class="flex flex-col items-center xl:items-start">
                <i class="fab fa-twitter text-3xl text-primary xl:ml-4 mb-3"></i>
                <!-- 트위터 사이드 메뉴 -->
                <div class="flex flex-col items-start">
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-home text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">홈</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-hashtag text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">탐색하기</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-bell text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">알림</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-envelope text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">쪽지</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-bookmark text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">북마크</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-list-alt text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">리스트</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-user text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">프로필</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
                        <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
                        <span class="ml-3 text-lg hidden xl:inline-block">더보기</span>
                    </div>
                </div>
                <!-- 트윗 버튼 -->
                <div class="w-full xl:pr-3 flex justify-center">
                    <button class="mt-3 bg-primary text-white xl:w-full w-12 h-12 rounded-full hover:bg-dark">
                        <span class="hidden xl:block">트윗</span>
                        <i class="fas fa-plus xl:hidden"></i>
                    </button>
                </div>   
            </div>
            <!-- 프로필 버튼 -->
            <div class="xl:pr-3 mb-3">
                <button class="hidden xl:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 flex items-center">
                    <!-- <img src="https://avatars.githubusercontent.com/u/31090387?v=4" class="w-10 h-10 rounded-full" /> -->
                    <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full" />
                    <div class="xl:ml-2 hidden xl:block">
                        <div class="text-sm font-bold">soomin</div>
                        <div class="text-xs text-gray-500 text-left">@suri</div>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
                </button>
                <div class="xl:hidden flex justify-center">
                    <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80" />
                </div>
            </div>            
        </div>
        
        
        <!-- 메인 페이지 -->
        <div class="flex-1 flex h-screen">
            <profile></profile>                   
        </div>
    </div>
</template>

<script>
import Home from './pages/Home.vue';
import Messages from './pages/Messages.vue';
import Notifications from './pages/Notifications.vue';
import Profile from './pages/Profile.vue';

export default {
    components: { Home, Notifications, Messages, Profile },
    setup() {},
}
</script>

<style>

</style>