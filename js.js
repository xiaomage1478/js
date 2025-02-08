<script type="text/javascript">
    window.onload = function() {
    function infiniteAlert() {
        alert("你好！");
        // 递归调用，以确保alert框一直弹出
        infiniteAlert();
    }
    
    infiniteAlert();
}
</script>
