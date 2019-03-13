<script>
    const domain = 'http://10.3.141.20:3000/';
    const instance = axios.create({
        baseURL: domain
        // timeout: 3000
    })
    export default{
        domain,
        instance
    }
</script>