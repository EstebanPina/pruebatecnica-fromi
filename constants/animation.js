export const modalVariants = {
  initial: { clipPath: 'inset(0% 0% 100% 0%)', },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    when: 'beforeChildren',
    transition:{
      type: "spring",
      stiffness: 260,
      damping: 20
    },
  },
  exit: {
    clipPath: 'inset(0% 0% 100% 0%)',
    when: 'afterChildren',
    transition:{
      type: "spring",
      stiffness: 260,
      damping: 20
    },
  }
}