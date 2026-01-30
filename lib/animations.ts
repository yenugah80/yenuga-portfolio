// Smooth easing curves
const smoothEase = [0.25, 0.1, 0.25, 1] // cubic-bezier for smooth feel
const gentleEase = [0.4, 0, 0.2, 1] // Material Design standard easing
const smoothSpring = { type: 'spring', stiffness: 100, damping: 15, mass: 1 }

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: smoothEase },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: gentleEase },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: smoothEase },
}

export const slideInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: smoothEase },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: smoothEase },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: smoothEase },
}

// Smooth hover effects with spring physics
export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
  transition: smoothSpring,
}

export const hoverLift = {
  whileHover: { y: -8 },
  transition: smoothSpring,
}

export const hoverGlow = {
  whileHover: {
    y: -5,
    boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.3)',
  },
  transition: { duration: 0.4, ease: gentleEase },
}

// Card animations
export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.3, ease: gentleEase },
  },
  whileTap: { scale: 0.98 },
}

// Smooth page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: smoothEase },
}

// Text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: smoothEase },
}

// Smooth list animations
export const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const listItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
}
