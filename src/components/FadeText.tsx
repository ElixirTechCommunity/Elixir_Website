import { FadeText } from "@/components/magicui/fade-text";

export function FadeTextDemo() {
  return (
    <div className='flex flex-col space-y-8 text-center'>
      <FadeText
        className='text-4xl font-bold text-black dark:text-white'
        direction='up'
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text='Elixir'
      />
      <FadeText
        className='text-4xl font-bold text-black dark:text-white'
        direction='right'
        framerProps={{
          show: { transition: { delay: 0.4 } },
        }}
        text='The Tech'
      />
      <FadeText
        className='text-4xl font-bold text-black dark:text-white'
        direction='down'
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text='Community'
      />
      <FadeText
        className='text-4xl font-bold text-black dark:text-white'
        direction='left'
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text='Fade Left'
      />
    </div>
  );
}
