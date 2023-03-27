import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Outlet } from 'react-router-dom';
import image from '../../public/quiz.png';

const GuestLayout = () => {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <LazyLoadImage
            className="mx-auto h-12 sm:h-16 w-auto"
            src={image}
          />
        </div>

        <Outlet />

      </div>
    </div>
  )
}

export default GuestLayout
