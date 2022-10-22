SELECT              
    posts.id,     
    users.name,     
    users.image_url,     
    users.email,     
    posts.description,     
    posts.link,     
COUNT(likes.id) AS likes_number         
    FROM hashtags         
    JOIN post_hashtags ON hashtags.id=post_hashtags.hashtag_id         
    JOIN posts ON post_hashtags.post_id=posts.id         
    JOIN users ON users.id = posts.user_id                    
    LEFT JOIN likes ON posts.id = likes.post_id          
    WHERE hashtags.name='we'         
    GROUP BY posts.id, users.name, users.image_url, users.email          
    ORDER BY posts.created_at DESC                    
    LIMIT 20;