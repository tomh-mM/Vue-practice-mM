<template>
    <div>
        <h2>
            {{ copy }}
        </h2>
    </div>
</template>

<script>
export default {
    name: "CopyComponent",
    props: {
        copy: String
    }
}
</script>