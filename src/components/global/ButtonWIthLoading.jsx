const ButtonWIthLoading = ({ children, loading = false }) => {
  return (
    <button
      className="mt-2 text-green-300 btn disabled:bg-opacity-70 disabled:bg-black disabled:text-green-300 disabled:text-opacity-50"
      disabled={loading}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default ButtonWIthLoading;
