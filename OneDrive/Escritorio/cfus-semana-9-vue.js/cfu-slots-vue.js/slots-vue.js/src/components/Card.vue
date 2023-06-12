<template>
    <article class="container">
        <header>
            <slot name="header"></slot>
        </header>
       <main>
           <slot></slot>
       </main>
    </article>
</template>


<style scoped>
.container {
    background: lightgray;
    width: 20rem;

}
header {
    color: blue;
}
</style>