<template>
    <div class="project" :style="{background: 'url('+ require('@/assets/project_pictures/'+project.image) +')'}">
        <h3 class="project-title">{{ project.title }}</h3>

        <div class="project-hover">
            <div class="techs-wrap">
                <span class="techs" v-for="t in project.tech" :key="t">{{ t }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
        }
    },
    created() {
        console.log(this.project.tech)
    }
}
</script>

<style lang="scss" scoped>
h3 {
    margin: 0;
}

.project {
    width: 340px;
    height: 200px;
    background-size: cover !important;
    position: relative;

    .project-title {
        margin: 0;
        background: #FFF;
        font-weight: 400;
        text-align: center;
        padding: 6px 0;
        color: #4D4D4D;
    }
}


.project-hover {
    height: calc(100% - 31px);
    width: 100%;
    position: relative;
    background: #212121d9;
}

.techs-wrap {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: 20%;

    width: 340px;
    height: 80px;
    display: inline-block;
    text-align: center;
    .techs {
        position: relative;
        color: #ffffff;
        background: #964343;
        margin: 0 2px;
        padding: 4px 9px;
        font-weight: 300;
        text-transform: uppercase;
        border-bottom: 2px solid #ffffff40;
        cursor: pointer;
        user-select: none;
        height: fit-content;
        width: fit-content;
        display: inline-block;
        font-size: 14px;
        
        &:hover {
            animation-name: hoverTECH;
            animation-duration: 0.2s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
        }

        @keyframes hoverTECH {
            from {
                top: 0px;
                border-bottom: 2px solid #ffffff40;
                
            }
            to {
                top: -2px;
                border-bottom: 4px solid #ffffff40;
            }
        }
    }
}


</style>