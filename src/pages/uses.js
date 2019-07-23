import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import PageHeader from '../components/pageHeader/pageHeader';
import SEO from '../components/seo';

const UsesPage = () => {
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(filter: { frontmatter: { type: { eq: "uses" } } }) {
				edges {
					node {
						frontmatter {
							title
							description
						}
						html
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO
				title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
				description={data.allMarkdownRemark.edges[0].node.frontmatter.description}
			/>
			<Container>
				<PageHeader title={data.allMarkdownRemark.edges[0].node.frontmatter.title}>
					{data.allMarkdownRemark.edges[0].node.frontmatter.description}
				</PageHeader>
				<div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
			</Container>
		</Layout>
	);
};

export default UsesPage;