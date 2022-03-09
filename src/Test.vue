<script>

export default {
    async created() {
        console.log(await fetch('http://laravelfp.herokuapp.com/api/test'));
    },
}
</script>
