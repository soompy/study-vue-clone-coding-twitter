<template>
    <div class="flex h-screen">        
        <div class="w-1/4 mt-5 ml-10 flex flex-col justify-between">
            <div>
                <i class="fab fa-twitter text-3xl text-primary ml-4"></i>
                <!-- 트위터 사이드 메뉴 -->
                <div class="flex flex-col items-start">
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-home text-2xl"></i>
                        <span class="ml-3 text-lg">홈</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-hashtag text-2xl"></i>
                        <span class="ml-3 text-lg">탐색하기</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-bell text-2xl"></i>
                        <span class="ml-3 text-lg">알림</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-envelope text-2xl"></i>
                        <span class="ml-3 text-lg">쪽지</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-bookmark text-2xl"></i>
                        <span class="ml-3 text-lg">북마크</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-list-alt text-2xl"></i>
                        <span class="ml-3 text-lg">리스트</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-user text-2xl"></i>
                        <span class="ml-3 text-lg">프로필</span>
                    </div>
                    <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
                        <i class="fas fa-fw fa-ellipsis-h text-2xl"></i>
                        <span class="ml-3 text-lg">더보기</span>
                    </div>
                </div>
                <!-- 트윗 버튼 -->
                <div class="mr-3">
                    <button class="mt-3 bg-primary text-white w-full h-12 rounded-full hover:bg-dark">트윗</button>
                </div>   
            </div>
            <!-- 프로필 버튼 -->
            <div class="mr-3 mb-3">
                <button class="mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 flex items-center">
                    <!-- <img src="https://avatars.githubusercontent.com/u/31090387?v=4" class="w-10 h-10 rounded-full" /> -->
                    <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full" />
                    <div class="ml-2">
                        <div class="text-sm font-bold">soomin</div>
                        <div class="text-xs text-gray-500 text-left">@suri</div>
                    </div>
                    <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs"></i>
                </button>
            </div>            
        </div>
        <div class="w-3/4 bg-gray-300">dd</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>