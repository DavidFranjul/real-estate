const NavigationLink = ({ title, link, icon }) => {
  return (
    
      <Link href={link} />
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    
  );
};

export default NavigationLink;
