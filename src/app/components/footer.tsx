// @flow strict
import Link from 'next/link';
import { personalData } from '../utils/data/personal-data';

export function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm">
            © Developed by{' '}
            <Link
              target="_blank"
              href={personalData.github}
              className="text-[#16f2b3]"
            >
              Bineet Naidu
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
