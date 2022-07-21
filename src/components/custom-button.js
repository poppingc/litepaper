import clsxm from '@/lib/clsxm';

export default function CustomButton({
  size = 'md',
  variant = 'outline',
  whiteText = false,
  children,
  ...props
}) {
  return (
    <button
      className={clsxm(
        'font-secondary relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap border-2 border-green-primary',
        {
          'bg-transparent text-green-primary hover:bg-green-primary hover:text-black':
            variant === 'outline',
          'bg-green-primary font-semibold text-black hover:bg-[#61DD7B]':
            variant === 'filled',
          'text-white': whiteText,
          'h-10 rounded-[10px] px-[10px] text-[13px]': size === 'sm',
          'h-12 min-w-[120px] rounded-2xl px-3 text-sm md:h-16 md:min-w-[160px] md:px-5  md:text-base':
            size === 'md',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
}
