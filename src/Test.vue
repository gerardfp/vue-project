<script>

export default {
    async created() {
        console.log(await fetch('https://laravelfp.herokuapp.com/api/test'));
    },
}
</script>
