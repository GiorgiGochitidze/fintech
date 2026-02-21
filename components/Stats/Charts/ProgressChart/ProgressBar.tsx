const ProgressBar = () => {
  return (
    <div className="w-full h-2.5 rounded bg-[var(--progress-secondary)] relative overflow-hidden">
      <div className="w-[30%] h-full rounded absolute left-0 top-0 bg-[var(--progress-primary)]"></div>
    </div>
  );
};

export default ProgressBar;
