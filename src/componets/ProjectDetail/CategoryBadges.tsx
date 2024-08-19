const CategoryBadges = ({ tags }) => {
  return (
    <div className="w-full mt-2 pt-4 md:pt-4 flex flex-row items-start border-t border-border-200 border-opacity-60 ">
      <div className="flex flex-row flex-wrap gap-2">
        {tags?.map((tag, i) => (
          <span
            key={i}
            className="text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded border-slate-400 transition-colors hover:border-accent "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryBadges;
