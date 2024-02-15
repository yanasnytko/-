<template>
    <div>
        <h2>
            Nous n'avons rien trouvé :( <br />
            Ce {{ name }} n'existe pas !
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
};
</script>
