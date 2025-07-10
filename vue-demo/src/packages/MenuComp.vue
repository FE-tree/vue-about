<template>
    <div class="path-wrp">
        <menu-path :router="paths"></menu-path>
    </div>
</template>

<script>
import MenuPath from '@/components/MenuPath'
export default {
    name: 'menu-comp',
    components: { MenuPath },
    data() {
        return {
            paths: [
                {
                    name: "About",
                    path: "/about",
                    children: [
                        {
                            name: "About US",
                            path: "/about/us"
                        },
                        {
                            name: "About Comp",
                            path: "/about/company",
                            children: [
                                {
                                    name: "About Comp A",
                                    path: "/about/company/A",
                                    children: [
                                        {
                                            name: "About Comp A 1",
                                            path: "/about/company/A/1"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Link",
                    path: "/link"
                }
            ]
        }
    },
    created() {
        // console.log(this.paths)
    }
}
</script>
