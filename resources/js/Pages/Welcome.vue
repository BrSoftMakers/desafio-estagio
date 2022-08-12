<template>
    <Head title="Welcome" />

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-gray-700 underline">
                Dashboard
            </Link>

            <template v-else>
                <Link :href="route('login')" 
                    class=" ml-4 text-gray-700 underline
                        text-xl
                        font-bold
                        text-gray-700
                        md:text-2xl
                        hover:text-indigo-400">
                    Entrar
                </Link>

                <Link v-if="canRegister" :href="route('register')" class=" ml-4 text-gray-700 underline
    
                        text-xl
                        font-bold
                        text-gray-700
                        md:text-2xl
                        hover:text-indigo-400">
                    Cadastre-se
                </Link>
                
            </template>
            
        </div>
        <div class="ml-20 font-bold mt-10 text-5xl ">
                    Locadora de Carros<br>
                               
        </div>
        
        <div>
            <span class="rounded-full text-white shadow-lg content-center">
                <img  src="/storage/img/logo.png" width="700" height="700"/> 
            </span> 
        </div> <br>
        

    </div>
    <div class="ml-20 mb-20 font-bold text-1xl">
        <p>OBS: Para acessar o sistema é necessario se cadastrar antes.</p><br>
        <p>Após o cadastro realizado, basta clicar no botão REGISTER para acessar o sistema.</p>
    </div>
    
       
</template>

<style scoped>
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }
    .font-bold {
	font-weight: 700;
    }

    .hover\:text-indigo-400:hover {
	--tw-text-opacity: 1;
	color: rgba(129, 140, 248, var(--tw-text-opacity));
    }
    .mb-20 {
	margin-bottom: 5rem;
    }
	.md\:text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}    

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }
    .text-xl {
	font-size: 1.25rem;
	line-height: 1.75rem;
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>

<script>
    import { defineComponent } from 'vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Head,
            Link,
        },

        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
        }
    })
</script>
