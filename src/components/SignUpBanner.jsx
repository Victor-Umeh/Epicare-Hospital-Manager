const SignUpBanner = ({ img }) => {
  return (
    <section className="w-[50%] h-[100%] fixed right-0 top-0">
      <img className="w-[100%] object-cover" src={img} alt="" />
    </section>
  );
};

export default SignUpBanner;
