import ThumbsCarousel from './ThumbsCarousel';
import CategoryBadges from './CategoryBadges';
import { IoMdClose, IoLogoGithub } from 'react-icons/io';

interface ProjectDetailProps {
  project: any;
  closeModal: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  closeModal,
}) => {
  const { id, title, coverImage, description, tags, gallery } = project ?? {};

  return (
    <article className="rounded-lg bg-black relative">
      <div className="flex flex-col border-b border-border-200 border-opacity-70 md:flex-row">
        <div className="p-2 md:w-1/2 lg:p-4 xl:p-6">
          <div className="mb-8 flex items-center justify-between lg:mb-10"></div>

          <div className="product-gallery h-full">
            <ThumbsCarousel
              gallery={gallery}
              hideThumbs={gallery.length <= 1}
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full">
            <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse">
              <h1 className="text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl,cursor-pointer transition-colors hover:text-accent">
                {title}
              </h1>
            </div>
            <div className="mt-2 flex items-center justify-between">
              {!!tags?.length && <CategoryBadges tags={tags} />}
            </div>

            {description && (
              <div className="mt-3 text-sm leading-7 text-body md:mt-4">
                {description}
              </div>
            )}

            <div className="mt-12 flex flex-col items-center md:mt-6 lg:flex-row">
              <div className="mb-4 w-full text-amber-500 lg:mb-0 lg:max-w-[400px]">
                Demo Link:
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="py-1 text-sm font-semibold capitalize text-heading ltr:mr-6 rtl:ml-6"></span>

            <a
              href={project.demoUrl}
              target="_blank"
              className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline"
            >
              {project.demoUrl}
            </a>
          </div>

          <div className="mt-2 flex flex-col items-start">
            <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
              <div className="mb-4 w-full text-amber-500 lg:mb-0 lg:max-w-[400px]">
                Source link:
              </div>
            </div>
            {project.source.map((item, index) => (
              <div className="mb-3">
                {item.title && <p className="text-slate-400 ">{item.title}</p>}
                <a
                  href={item.url}
                  target="_blank"
                  className="text-sm tracking-wider underline transition hover:text-gray-500 hover:no-underline"
                >
                  <IoLogoGithub className="w-12 h-12 hover:opacity-80" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        name="details"
        className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14"
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
          details
        </h2>
        <p className="text-sm text-body">{description}</p>
      </div>
      <button
        onClick={closeModal}
        className="absolute p-2 -top-2 -right-2 bg-neutral-600 text-white text-lg rounded-lg hover:text-gray-300 hover:bg-neutral-500 focus:outline-none"
      >
        <IoMdClose className="w-6 h-6" />
      </button>
    </article>
  );
};

export default ProjectDetail;
