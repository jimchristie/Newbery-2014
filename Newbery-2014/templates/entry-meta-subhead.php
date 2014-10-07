<div class="subhead">
    <span class="postauthortop author vcard">
    <i class="icon-user"></i> <?php echo __('by', 'virtue');?> <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author"><?php echo get_the_author() ?></a> |</span>
    <?php $post_category = get_the_category($post->ID); if ( $post_category==true ) { ?>  
    <span class="postedintop"><i class="icon-folder-open"></i> <?php _e('posted in:', 'virtue'); ?> <?php the_category(', ') ?></span> <?php }?>
    <span class="kad-hidepostedin">|</span>
    <span class="postcommentscount">
    
    <?php 
    $comment_number = get_comments_number();
    if ( $comment_number > 0 ){
    	print "<a href=\"" . get_permalink() . "#comments\"><i class=\"icon-comments-alt\"></i> Comments: {$comment_number}</a>";
    } else {
    	print '<i class="icon-comments-alt"></i> Comments: 0';
    }
    ?>
    </span>
</div>