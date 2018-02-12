import React, { Component } from 'react';
import Header from 'components/Header';
import Grid from 'material-ui/Grid';
import CategoryList from 'components/CategoryList';
import PostCard from 'components/PostCard';
import SortSelect from 'components/SortSelect';
import PostForm from 'components/PostForm';
import PostActions from 'components/PostActions';

class Page extends Component {
  state = {
    postForm: false
  };

  handlePostFormOpen = () => {
    this.setState({ postForm: true });
  };

  handlePostFormClose = () => {
    this.setState({ postForm: false });
  };

  render() {
    const dataCategories = {
      categories: [
        {
          name: 'react',
          path: 'react'
        },
        {
          name: 'redux',
          path: 'redux'
        },
        {
          name: 'udacity',
          path: 'udacity'
        }
      ]
    };

    const dataPosts = {
      posts: {
        '8xf0y6ziyjabvozdd253nd': {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'Udacity is the best place to learn React',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2
        },
        '6ni6ok3ym7mf1p33lnez': {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body:
            'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0
        }
      }
    };

    const { category } = this.props.match.params;
    const { postForm } = this.state;

    const posts = Object.entries(dataPosts.posts).map(function([key, value]) {
      let actions = (
        <PostActions
          viewVisible={true}
          editVisible={true}
          deleteVisible={true}
          viewHref={'/' + value.category + '/' + value.id}
        />
      );
      let post = <PostCard key={key} content={value} actions={actions} />;

      if (category) {
        if (category === value.category) {
          return post;
        } else {
          return false;
        }
      } else {
        return post;
      }
    });

    return (
      <div>
        <Header handlePostFormOpen={this.handlePostFormOpen} />
        <PostForm
          open={postForm}
          onClose={this.handlePostFormClose}
          title="New post"
        />
        <main>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={2}>
              <CategoryList items={dataCategories} />
            </Grid>
            <Grid item xs={12} sm={10}>
              <center>
                <SortSelect defaultValue="vote" />
              </center>
              {posts}
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default Page;
