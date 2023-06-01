<template>
    <!-- 트윗 -->
    <div class="flex px-3 py-3 border-b border-gray-100 hover:bg-gray-100 cursor-pointer">
        <img src="https://picsum.photos/200" class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer" />
        <div class="ml-3 flex-1 flex flex-col">
            <div class="text-sm space-x-1">
                <span class="font-bold">이수민</span>
                <span class="text-gray-500 text-xs">@suri.l</span>
                <span>*</span>
                <span class="text-gray-500 text-xs">10분</span>
            </div>
            <!-- 트윗 바디 -->
            <div>트윗내용 트윗내용 트윗내용 트윗내용 트윗내용</div>
            <!-- 트윗 액션들 -->
            <div class="flex justify-between">
                <div class="text-gray-500 hover:text-primary">
                    <i class="far fa-comment hover:bg-blue-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray-500 hover:text-green-500">
                    <i class="fa fa-retweet hover:bg-green-50 rounded-full p-2"></i>                                    
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray-500 hover:text-red-500">
                    <i class="far fa-heart hover:bg-red-50 rounded-full p-2"></i>
                    <span class="ml-1 text-sm">11</span>
                </div>
                <div class="text-gray-500 hover:text-primary">
                    <i class="far fa-share-square"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>